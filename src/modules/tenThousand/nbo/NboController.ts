import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbos")
export default class NboController {
  @operation({
    summary: "Get Nbos",
  })
  @get()
  static getNbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbo",
  })
  @post("{id}")
  static createNbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
