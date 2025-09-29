import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqas")
export default class DqaController {
  @operation({
    summary: "Get Dqas",
  })
  @get()
  static getDqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqa",
  })
  @post("{id}")
  static createDqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
