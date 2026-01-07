import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftp")
export default class FtpController {
  @operation({
    summary: "Get Ftp",
  })
  @get()
  static getFtp = procedure({
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
