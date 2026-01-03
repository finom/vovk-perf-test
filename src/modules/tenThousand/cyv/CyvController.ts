import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyvs")
export default class CyvController {
  @operation({
    summary: "Get Cyvs",
  })
  @get()
  static getCyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyv",
  })
  @post("{id}")
  static createCyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
