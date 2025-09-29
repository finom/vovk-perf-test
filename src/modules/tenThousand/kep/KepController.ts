import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keps")
export default class KepController {
  @operation({
    summary: "Get Keps",
  })
  @get()
  static getKeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kep",
  })
  @post("{id}")
  static createKep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
