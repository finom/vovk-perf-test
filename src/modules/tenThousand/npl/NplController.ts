import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npls")
export default class NplController {
  @operation({
    summary: "Get Npls",
  })
  @get()
  static getNpls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npl",
  })
  @post("{id}")
  static createNpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
