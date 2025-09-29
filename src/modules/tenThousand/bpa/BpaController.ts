import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpas")
export default class BpaController {
  @operation({
    summary: "Get Bpas",
  })
  @get()
  static getBpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpa",
  })
  @post("{id}")
  static createBpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
