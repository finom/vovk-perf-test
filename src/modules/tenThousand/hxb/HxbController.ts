import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxb")
export default class HxbController {
  @operation({
    summary: "Get Hxb",
  })
  @get()
  static getHxb = procedure({
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
