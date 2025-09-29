import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krjs")
export default class KrjController {
  @operation({
    summary: "Get Krjs",
  })
  @get()
  static getKrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krj",
  })
  @post("{id}")
  static createKrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
