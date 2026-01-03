import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndos")
export default class NdoController {
  @operation({
    summary: "Get Ndos",
  })
  @get()
  static getNdos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndo",
  })
  @post("{id}")
  static createNdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
