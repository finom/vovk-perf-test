import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnws")
export default class NnwController {
  @operation({
    summary: "Get Nnws",
  })
  @get()
  static getNnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnw",
  })
  @post("{id}")
  static createNnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
