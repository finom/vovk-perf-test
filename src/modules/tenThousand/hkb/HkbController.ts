import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkb")
export default class HkbController {
  @operation({
    summary: "Get Hkb",
  })
  @get()
  static getHkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkb",
  })
  @post("{id}")
  static createHkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
