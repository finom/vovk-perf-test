import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnjs")
export default class FnjController {
  @operation({
    summary: "Get Fnjs",
  })
  @get()
  static getFnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnj",
  })
  @post("{id}")
  static createFnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
