import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfn")
export default class DfnController {
  @operation({
    summary: "Get Dfn",
  })
  @get()
  static getDfn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfn",
  })
  @post("{id}")
  static createDfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
