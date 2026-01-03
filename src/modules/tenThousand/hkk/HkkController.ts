import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkks")
export default class HkkController {
  @operation({
    summary: "Get Hkks",
  })
  @get()
  static getHkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkk",
  })
  @post("{id}")
  static createHkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
