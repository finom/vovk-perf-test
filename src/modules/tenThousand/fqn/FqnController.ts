import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqn")
export default class FqnController {
  @operation({
    summary: "Get Fqn",
  })
  @get()
  static getFqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqn",
  })
  @post("{id}")
  static createFqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
