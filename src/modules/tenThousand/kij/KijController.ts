import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kijs")
export default class KijController {
  @operation({
    summary: "Get Kijs",
  })
  @get()
  static getKijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kij",
  })
  @post("{id}")
  static createKij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
