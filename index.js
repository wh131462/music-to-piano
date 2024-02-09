import * as path from "path";
import {getBytesOfFile} from "./src/utils/getBytesOfFile.js";

/**
 * 主函数 - 转化音乐文件到piano音乐文件
 * @param src
 */
export const musicToPiano = async (src)=>{
    const musicPath = path.resolve(src);
    const musicBytes = await getBytesOfFile(musicPath);
    return ""
}
