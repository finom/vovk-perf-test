import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbls")
export default class NblController {
  @operation({
    summary: "Get Nbls",
  })
  @get()
  static getNbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbl",
  })
  @post("{id}")
  static createNbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
