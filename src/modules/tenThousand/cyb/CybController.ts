import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyb")
export default class CybController {
  @operation({
    summary: "Get Cyb",
  })
  @get()
  static getCyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyb",
  })
  @post("{id}")
  static createCyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
