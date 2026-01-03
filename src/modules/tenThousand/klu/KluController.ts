import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klus")
export default class KluController {
  @operation({
    summary: "Get Klus",
  })
  @get()
  static getKlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klu",
  })
  @post("{id}")
  static createKlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
