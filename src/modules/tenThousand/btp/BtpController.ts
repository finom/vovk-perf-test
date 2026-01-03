import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btps")
export default class BtpController {
  @operation({
    summary: "Get Btps",
  })
  @get()
  static getBtps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btp",
  })
  @post("{id}")
  static createBtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
