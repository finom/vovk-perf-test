import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqas")
export default class HqaController {
  @operation({
    summary: "Get Hqas",
  })
  @get()
  static getHqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqa",
  })
  @post("{id}")
  static createHqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
