import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkv")
export default class JkvController {
  @operation({
    summary: "Get Jkv",
  })
  @get()
  static getJkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkv",
  })
  @post("{id}")
  static createJkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
