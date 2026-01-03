import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmos")
export default class NmoController {
  @operation({
    summary: "Get Nmos",
  })
  @get()
  static getNmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmo",
  })
  @post("{id}")
  static createNmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
