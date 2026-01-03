import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftps")
export default class FtpController {
  @operation({
    summary: "Get Ftps",
  })
  @get()
  static getFtps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftp",
  })
  @post("{id}")
  static createFtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
