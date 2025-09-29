import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnjs")
export default class MnjController {
  @operation({
    summary: "Get Mnjs",
  })
  @get()
  static getMnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnj",
  })
  @post("{id}")
  static createMnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
