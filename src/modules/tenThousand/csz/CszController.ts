import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csz")
export default class CszController {
  @operation({
    summary: "Get Csz",
  })
  @get()
  static getCsz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csz",
  })
  @post("{id}")
  static createCsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
