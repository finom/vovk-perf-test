import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyos")
export default class DyoController {
  @operation({
    summary: "Get Dyos",
  })
  @get()
  static getDyos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyo",
  })
  @post("{id}")
  static createDyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
