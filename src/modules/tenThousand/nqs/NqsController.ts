import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqs")
export default class NqsController {
  @operation({
    summary: "Get Nqs",
  })
  @get()
  static getNqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqs",
  })
  @post("{id}")
  static createNqs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
