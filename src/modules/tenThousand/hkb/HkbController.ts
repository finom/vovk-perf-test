import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkbs")
export default class HkbController {
  @operation({
    summary: "Get Hkbs",
  })
  @get()
  static getHkbs = procedure({
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
