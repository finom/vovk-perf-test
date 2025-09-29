import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ases")
export default class AseController {
  @operation({
    summary: "Get Ases",
  })
  @get()
  static getAses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ase",
  })
  @post("{id}")
  static createAse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
