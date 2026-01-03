import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klks")
export default class KlkController {
  @operation({
    summary: "Get Klks",
  })
  @get()
  static getKlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klk",
  })
  @post("{id}")
  static createKlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
