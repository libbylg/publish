package main

import (
	"net/http"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"io"
)

//	host	<ROOT>		http://xxxx:xxxx/yyyy/zzz
//	host	<CUR-DIR>	http://0.0.0.0:80/
func main() {

	//os.Exit(mainimpl([]string{
	//	os.Args[0],
	//	`E:\dev\publish\web\publish`,
	//	`:80`,
	//}))

	//os.Exit(mainimpl([]string{
	//	os.Args[0],
	//	`E:\dev\publish\web\publish`,
	//}))

	os.Exit(mainimpl([]string{
		os.Args[0],
		`E:\dev\publish\web\publish`,
		`http://0.0.0.0:80/`,
	}))

	//os.Exit(mainimpl(os.Args))
}

func ShowHelp(w io.Writer) {
	fmt.Fprintln(w, "Usage:")
	fmt.Fprintln(w, "	host [<HOST-DIR>] [<WEB-URL>]")
	fmt.Fprintln(w, "")
	fmt.Fprintln(w, "Options:")
	fmt.Fprintln(w, "	<HOST-DIR>	The dir of the web content. The default value is the current working directory.")
	fmt.Fprintln(w, "	<WEB-URL>	The url-prefix of the web service. The default is http://0.0.0.0:80")
	fmt.Fprintln(w, "")
	fmt.Fprintln(w, "Example:")
	fmt.Fprintln(w, "	host '/home/ci/publish/web'  'http://0.0.0.0:80'")
}

func mainimpl(args []string) int {
	if len(args) >= 2 {
		if ("help" == args[1]) ||
			("-h" == args[1]) ||
			("--help" == args[1]) {
			ShowHelp(os.Stderr)
			return 0
		}
	}

	//	读取web服务的本地文件路径的地址
	rootDir, err := os.Getwd()
	if nil != err {
		rootDir = filepath.Dir(args[0])
	}

	if len(args) >= 2 {
		rootDir = args[1]
	}

	f, err := os.Stat(rootDir)
	if nil != err {
		fmt.Fprintf(os.Stderr, "%s\n", err.Error())
		return 1
	}

	if !f.IsDir() {
		rootDir = filepath.Dir(rootDir)
	}

	//	定义缺省值
	protocol := ""
	host := ""
	urlroot := ""

	//	读取命令行制定的url全称
	remain := ""
	if len(args) >= 3 {
		remain = args[2]
	}

	pos := strings.Index(remain, "://")
	if pos > 0 {
		protocol = strings.TrimSpace(remain[:pos])
		remain = remain[pos+3:]
	}

	pos = strings.Index(remain, "/")
	if pos > 0 {
		host = strings.TrimSpace(remain[:pos])
		urlroot = strings.TrimSpace(remain[pos:])
	}

	if "" == protocol {
		protocol = "http"
	}

	if "" == host {
		host = "0.0.0.0:80"
	}

	if "" == urlroot {
		urlroot = "/"
	}

	if "http" != protocol {
		fmt.Printf("Unsupported protocol: %s\n", protocol)
		return 2
	}

	fmt.Printf("Web service listening address: %s://%s%s\n", protocol, host, urlroot)

	http.Handle(urlroot, http.FileServer(http.Dir(rootDir)))
	err = http.ListenAndServe(host, nil)
	if http.ErrServerClosed != err {
		fmt.Fprintf(os.Stderr, "%s\n", err.Error())
		return 3
	}

	return 0
}
