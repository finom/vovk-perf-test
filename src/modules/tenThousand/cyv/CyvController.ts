import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyv")
export default class CyvController {
  @operation({
    summary: "Get Cyv",
  })
  @get()
  static getCyv = procedure({
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
