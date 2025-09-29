import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egcs")
export default class EgcController {
  @operation({
    summary: "Get Egcs",
  })
  @get()
  static getEgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egc",
  })
  @post("{id}")
  static createEgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
