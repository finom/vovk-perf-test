import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atcs")
export default class AtcController {
  @operation({
    summary: "Get Atcs",
  })
  @get()
  static getAtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atc",
  })
  @post("{id}")
  static createAtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
