import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwies")
export default class KwyController {
  @operation({
    summary: "Get Kwies",
  })
  @get()
  static getKwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwy",
  })
  @post("{id}")
  static createKwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
