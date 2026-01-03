import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktps")
export default class KtpController {
  @operation({
    summary: "Get Ktps",
  })
  @get()
  static getKtps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktp",
  })
  @post("{id}")
  static createKtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
