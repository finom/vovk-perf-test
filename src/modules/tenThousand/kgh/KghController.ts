import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kghs")
export default class KghController {
  @operation({
    summary: "Get Kghs",
  })
  @get()
  static getKghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgh",
  })
  @post("{id}")
  static createKgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
