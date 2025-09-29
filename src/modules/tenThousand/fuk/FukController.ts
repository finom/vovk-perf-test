import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuks")
export default class FukController {
  @operation({
    summary: "Get Fuks",
  })
  @get()
  static getFuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuk",
  })
  @post("{id}")
  static createFuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
