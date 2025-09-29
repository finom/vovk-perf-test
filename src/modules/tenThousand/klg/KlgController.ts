import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klgs")
export default class KlgController {
  @operation({
    summary: "Get Klgs",
  })
  @get()
  static getKlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klg",
  })
  @post("{id}")
  static createKlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
