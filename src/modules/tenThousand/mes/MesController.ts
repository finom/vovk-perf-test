import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mes")
export default class MesController {
  @operation({
    summary: "Get Mes",
  })
  @get()
  static getMes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mes",
  })
  @post("{id}")
  static createMes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
