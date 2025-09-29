import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddes")
export default class DdeController {
  @operation({
    summary: "Get Ddes",
  })
  @get()
  static getDdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dde",
  })
  @post("{id}")
  static createDde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
