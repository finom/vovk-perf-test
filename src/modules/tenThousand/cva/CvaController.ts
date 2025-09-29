import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvas")
export default class CvaController {
  @operation({
    summary: "Get Cvas",
  })
  @get()
  static getCvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cva",
  })
  @post("{id}")
  static createCva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
