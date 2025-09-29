import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlqs")
export default class NlqController {
  @operation({
    summary: "Get Nlqs",
  })
  @get()
  static getNlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlq",
  })
  @post("{id}")
  static createNlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
