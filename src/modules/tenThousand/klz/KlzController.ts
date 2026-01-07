import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klz")
export default class KlzController {
  @operation({
    summary: "Get Klz",
  })
  @get()
  static getKlz = procedure({
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
