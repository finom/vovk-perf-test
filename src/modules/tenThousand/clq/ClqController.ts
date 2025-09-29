import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clqs")
export default class ClqController {
  @operation({
    summary: "Get Clqs",
  })
  @get()
  static getClqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clq",
  })
  @post("{id}")
  static createClq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
