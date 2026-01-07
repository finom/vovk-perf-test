import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klx")
export default class KlxController {
  @operation({
    summary: "Get Klx",
  })
  @get()
  static getKlx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klx",
  })
  @post("{id}")
  static createKlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
