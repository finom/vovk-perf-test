import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxjs")
export default class HxjController {
  @operation({
    summary: "Get Hxjs",
  })
  @get()
  static getHxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxj",
  })
  @post("{id}")
  static createHxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
