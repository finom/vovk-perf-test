import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alus")
export default class AluController {
  @operation({
    summary: "Get Alus",
  })
  @get()
  static getAlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alu",
  })
  @post("{id}")
  static createAlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
