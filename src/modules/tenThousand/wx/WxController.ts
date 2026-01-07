import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wx")
export default class WxController {
  @operation({
    summary: "Get Wx",
  })
  @get()
  static getWx = procedure({
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
