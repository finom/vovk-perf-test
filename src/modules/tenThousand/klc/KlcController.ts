import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klcs")
export default class KlcController {
  @operation({
    summary: "Get Klcs",
  })
  @get()
  static getKlcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klc",
  })
  @post("{id}")
  static createKlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
