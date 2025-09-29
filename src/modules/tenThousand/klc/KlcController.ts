import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klcs")
export default class KlcController {
  @operation({
    summary: "Get Klcs",
  })
  @get()
  static getKlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klc",
  })
  @post("{id}")
  static createKlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
