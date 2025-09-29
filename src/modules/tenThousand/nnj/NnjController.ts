import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnjs")
export default class NnjController {
  @operation({
    summary: "Get Nnjs",
  })
  @get()
  static getNnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnj",
  })
  @post("{id}")
  static createNnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
