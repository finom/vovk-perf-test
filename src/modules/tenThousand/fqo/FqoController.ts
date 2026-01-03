import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqos")
export default class FqoController {
  @operation({
    summary: "Get Fqos",
  })
  @get()
  static getFqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqo",
  })
  @post("{id}")
  static createFqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
