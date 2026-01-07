import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aab")
export default class AabController {
  @operation({
    summary: "Get Aab",
  })
  @get()
  static getAab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aab",
  })
  @post("{id}")
  static createAab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
