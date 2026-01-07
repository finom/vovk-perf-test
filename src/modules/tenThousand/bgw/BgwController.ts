import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgw")
export default class BgwController {
  @operation({
    summary: "Get Bgw",
  })
  @get()
  static getBgw = procedure({
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
