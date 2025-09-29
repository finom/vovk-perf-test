import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fncs")
export default class FncController {
  @operation({
    summary: "Get Fncs",
  })
  @get()
  static getFncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnc",
  })
  @post("{id}")
  static createFnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
