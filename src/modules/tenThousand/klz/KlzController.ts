import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klzs")
export default class KlzController {
  @operation({
    summary: "Get Klzs",
  })
  @get()
  static getKlzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klz",
  })
  @post("{id}")
  static createKlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
