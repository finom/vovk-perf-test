import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eos")
export default class EosController {
  @operation({
    summary: "Get Eos",
  })
  @get()
  static getEos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eos",
  })
  @post("{id}")
  static createEos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
