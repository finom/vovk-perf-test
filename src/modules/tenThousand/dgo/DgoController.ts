import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgos")
export default class DgoController {
  @operation({
    summary: "Get Dgos",
  })
  @get()
  static getDgos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgo",
  })
  @post("{id}")
  static createDgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
