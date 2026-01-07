import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkw")
export default class HkwController {
  @operation({
    summary: "Get Hkw",
  })
  @get()
  static getHkw = procedure({
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
