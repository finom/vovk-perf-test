import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxm")
export default class HxmController {
  @operation({
    summary: "Get Hxm",
  })
  @get()
  static getHxm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxm",
  })
  @post("{id}")
  static createHxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
