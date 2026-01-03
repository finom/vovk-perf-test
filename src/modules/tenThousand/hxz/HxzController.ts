import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxzs")
export default class HxzController {
  @operation({
    summary: "Get Hxzs",
  })
  @get()
  static getHxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxz",
  })
  @post("{id}")
  static createHxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
