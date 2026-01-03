import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbls")
export default class CblController {
  @operation({
    summary: "Get Cbls",
  })
  @get()
  static getCbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbl",
  })
  @post("{id}")
  static createCbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
