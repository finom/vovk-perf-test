import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccos")
export default class CcoController {
  @operation({
    summary: "Get Ccos",
  })
  @get()
  static getCcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cco",
  })
  @post("{id}")
  static createCco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
