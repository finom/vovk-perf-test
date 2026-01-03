import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crks")
export default class CrkController {
  @operation({
    summary: "Get Crks",
  })
  @get()
  static getCrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crk",
  })
  @post("{id}")
  static createCrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
