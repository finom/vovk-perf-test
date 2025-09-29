import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("infs")
export default class InfController {
  @operation({
    summary: "Get Infs",
  })
  @get()
  static getInfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inf",
  })
  @post("{id}")
  static createInf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
