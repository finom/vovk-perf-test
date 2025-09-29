import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnqs")
export default class NnqController {
  @operation({
    summary: "Get Nnqs",
  })
  @get()
  static getNnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnq",
  })
  @post("{id}")
  static createNnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
