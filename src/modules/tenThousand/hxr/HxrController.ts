import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxr")
export default class HxrController {
  @operation({
    summary: "Get Hxr",
  })
  @get()
  static getHxr = procedure({
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
