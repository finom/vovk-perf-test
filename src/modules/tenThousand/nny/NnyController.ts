import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnies")
export default class NnyController {
  @operation({
    summary: "Get Nnies",
  })
  @get()
  static getNnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nny",
  })
  @post("{id}")
  static createNny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
