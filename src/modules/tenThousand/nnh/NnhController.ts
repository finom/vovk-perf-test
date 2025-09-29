import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnhs")
export default class NnhController {
  @operation({
    summary: "Get Nnhs",
  })
  @get()
  static getNnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnh",
  })
  @post("{id}")
  static createNnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
