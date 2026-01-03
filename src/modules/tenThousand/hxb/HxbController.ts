import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxbs")
export default class HxbController {
  @operation({
    summary: "Get Hxbs",
  })
  @get()
  static getHxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxb",
  })
  @post("{id}")
  static createHxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
