import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndqs")
export default class NdqController {
  @operation({
    summary: "Get Ndqs",
  })
  @get()
  static getNdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndq",
  })
  @post("{id}")
  static createNdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
