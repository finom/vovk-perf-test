import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxw")
export default class HxwController {
  @operation({
    summary: "Get Hxw",
  })
  @get()
  static getHxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxw",
  })
  @post("{id}")
  static createHxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
