import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klgs")
export default class KlgController {
  @operation({
    summary: "Get Klgs",
  })
  @get()
  static getKlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klg",
  })
  @post("{id}")
  static createKlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
