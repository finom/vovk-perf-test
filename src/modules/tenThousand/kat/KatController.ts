import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kats")
export default class KatController {
  @operation({
    summary: "Get Kats",
  })
  @get()
  static getKats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kat",
  })
  @post("{id}")
  static createKat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
