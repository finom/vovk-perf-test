import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmos")
export default class KmoController {
  @operation({
    summary: "Get Kmos",
  })
  @get()
  static getKmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmo",
  })
  @post("{id}")
  static createKmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
