import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxvs")
export default class HxvController {
  @operation({
    summary: "Get Hxvs",
  })
  @get()
  static getHxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxv",
  })
  @post("{id}")
  static createHxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
