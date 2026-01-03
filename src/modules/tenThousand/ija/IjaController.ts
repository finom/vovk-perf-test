import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijas")
export default class IjaController {
  @operation({
    summary: "Get Ijas",
  })
  @get()
  static getIjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ija",
  })
  @post("{id}")
  static createIja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
