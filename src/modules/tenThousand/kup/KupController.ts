import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kups")
export default class KupController {
  @operation({
    summary: "Get Kups",
  })
  @get()
  static getKups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kup",
  })
  @post("{id}")
  static createKup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
