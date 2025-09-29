import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuqs")
export default class FuqController {
  @operation({
    summary: "Get Fuqs",
  })
  @get()
  static getFuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuq",
  })
  @post("{id}")
  static createFuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
