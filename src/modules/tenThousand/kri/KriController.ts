import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kris")
export default class KriController {
  @operation({
    summary: "Get Kris",
  })
  @get()
  static getKris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kri",
  })
  @post("{id}")
  static createKri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
