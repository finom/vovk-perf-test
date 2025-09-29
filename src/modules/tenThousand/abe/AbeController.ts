import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abes")
export default class AbeController {
  @operation({
    summary: "Get Abes",
  })
  @get()
  static getAbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abe",
  })
  @post("{id}")
  static createAbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
