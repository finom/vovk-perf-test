import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nos")
export default class NosController {
  @operation({
    summary: "Get Nos",
  })
  @get()
  static getNos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nos",
  })
  @post("{id}")
  static createNos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
