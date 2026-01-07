import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klg")
export default class KlgController {
  @operation({
    summary: "Get Klg",
  })
  @get()
  static getKlg = procedure({
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
