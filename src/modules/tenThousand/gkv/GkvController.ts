import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkv")
export default class GkvController {
  @operation({
    summary: "Get Gkv",
  })
  @get()
  static getGkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkv",
  })
  @post("{id}")
  static createGkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
