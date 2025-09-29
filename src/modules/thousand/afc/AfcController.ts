import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afcs")
export default class AfcController {
  @operation({
    summary: "Get Afcs",
  })
  @get()
  static getAfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afc",
  })
  @post("{id}")
  static createAfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
