import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxv")
export default class HxvController {
  @operation({
    summary: "Get Hxv",
  })
  @get()
  static getHxv = procedure({
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
