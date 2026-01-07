import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayn")
export default class AynController {
  @operation({
    summary: "Get Ayn",
  })
  @get()
  static getAyn = procedure({
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
