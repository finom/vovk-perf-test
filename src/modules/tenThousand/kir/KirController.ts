import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kirs")
export default class KirController {
  @operation({
    summary: "Get Kirs",
  })
  @get()
  static getKirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kir",
  })
  @post("{id}")
  static createKir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
