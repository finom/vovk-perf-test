import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkq")
export default class HkqController {
  @operation({
    summary: "Get Hkq",
  })
  @get()
  static getHkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkq",
  })
  @post("{id}")
  static createHkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
