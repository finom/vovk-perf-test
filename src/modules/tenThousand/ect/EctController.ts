import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ects")
export default class EctController {
  @operation({
    summary: "Get Ects",
  })
  @get()
  static getEcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ect",
  })
  @post("{id}")
  static createEct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
