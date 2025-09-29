import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftps")
export default class FtpController {
  @operation({
    summary: "Get Ftps",
  })
  @get()
  static getFtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftp",
  })
  @post("{id}")
  static createFtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
