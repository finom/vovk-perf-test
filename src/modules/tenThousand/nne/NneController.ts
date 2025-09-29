import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnes")
export default class NneController {
  @operation({
    summary: "Get Nnes",
  })
  @get()
  static getNnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nne",
  })
  @post("{id}")
  static createNne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
