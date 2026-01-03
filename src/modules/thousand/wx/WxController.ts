import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wxes")
export default class WxController {
  @operation({
    summary: "Get Wxes",
  })
  @get()
  static getWxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wx",
  })
  @post("{id}")
  static createWx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
