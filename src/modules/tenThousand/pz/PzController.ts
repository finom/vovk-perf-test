import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pzs")
export default class PzController {
  @operation({
    summary: "Get Pzs",
  })
  @get()
  static getPzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pz",
  })
  @post("{id}")
  static createPz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
