import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkv")
export default class HkvController {
  @operation({
    summary: "Get Hkv",
  })
  @get()
  static getHkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkv",
  })
  @post("{id}")
  static createHkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
