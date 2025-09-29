import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nngs")
export default class NngController {
  @operation({
    summary: "Get Nngs",
  })
  @get()
  static getNngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nng",
  })
  @post("{id}")
  static createNng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
