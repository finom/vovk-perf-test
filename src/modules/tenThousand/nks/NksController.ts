import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nks")
export default class NksController {
  @operation({
    summary: "Get Nks",
  })
  @get()
  static getNks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nks",
  })
  @post("{id}")
  static createNks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
