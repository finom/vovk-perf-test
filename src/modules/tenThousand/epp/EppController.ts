import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epps")
export default class EppController {
  @operation({
    summary: "Get Epps",
  })
  @get()
  static getEpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epp",
  })
  @post("{id}")
  static createEpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
