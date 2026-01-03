import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkws")
export default class HkwController {
  @operation({
    summary: "Get Hkws",
  })
  @get()
  static getHkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkw",
  })
  @post("{id}")
  static createHkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
