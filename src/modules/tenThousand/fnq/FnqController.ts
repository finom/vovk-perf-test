import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnqs")
export default class FnqController {
  @operation({
    summary: "Get Fnqs",
  })
  @get()
  static getFnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnq",
  })
  @post("{id}")
  static createFnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
