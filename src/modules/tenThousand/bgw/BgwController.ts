import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgws")
export default class BgwController {
  @operation({
    summary: "Get Bgws",
  })
  @get()
  static getBgws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgw",
  })
  @post("{id}")
  static createBgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
