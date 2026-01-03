import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klhs")
export default class KlhController {
  @operation({
    summary: "Get Klhs",
  })
  @get()
  static getKlhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klh",
  })
  @post("{id}")
  static createKlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
