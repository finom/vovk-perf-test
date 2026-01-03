import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxrs")
export default class HxrController {
  @operation({
    summary: "Get Hxrs",
  })
  @get()
  static getHxrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxr",
  })
  @post("{id}")
  static createHxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
