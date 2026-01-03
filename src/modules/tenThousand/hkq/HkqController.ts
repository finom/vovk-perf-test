import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkqs")
export default class HkqController {
  @operation({
    summary: "Get Hkqs",
  })
  @get()
  static getHkqs = procedure({
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
