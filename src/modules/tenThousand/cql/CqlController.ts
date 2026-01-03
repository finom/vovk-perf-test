import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqls")
export default class CqlController {
  @operation({
    summary: "Get Cqls",
  })
  @get()
  static getCqls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cql",
  })
  @post("{id}")
  static createCql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
