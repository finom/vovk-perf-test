import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqas")
export default class BqaController {
  @operation({
    summary: "Get Bqas",
  })
  @get()
  static getBqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqa",
  })
  @post("{id}")
  static createBqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
