import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpps")
export default class HppController {
  @operation({
    summary: "Get Hpps",
  })
  @get()
  static getHpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpp",
  })
  @post("{id}")
  static createHpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
