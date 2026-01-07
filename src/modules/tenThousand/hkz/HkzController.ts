import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkz")
export default class HkzController {
  @operation({
    summary: "Get Hkz",
  })
  @get()
  static getHkz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkz",
  })
  @post("{id}")
  static createHkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
