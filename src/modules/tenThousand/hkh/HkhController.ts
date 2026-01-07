import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkh")
export default class HkhController {
  @operation({
    summary: "Get Hkh",
  })
  @get()
  static getHkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkh",
  })
  @post("{id}")
  static createHkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
