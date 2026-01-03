import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayns")
export default class AynController {
  @operation({
    summary: "Get Ayns",
  })
  @get()
  static getAyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayn",
  })
  @post("{id}")
  static createAyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
