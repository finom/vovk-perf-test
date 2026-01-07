import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fin")
export default class FinController {
  @operation({
    summary: "Get Fin",
  })
  @get()
  static getFin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fin",
  })
  @post("{id}")
  static createFin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
