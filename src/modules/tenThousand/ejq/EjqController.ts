import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejqs")
export default class EjqController {
  @operation({
    summary: "Get Ejqs",
  })
  @get()
  static getEjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejq",
  })
  @post("{id}")
  static createEjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
