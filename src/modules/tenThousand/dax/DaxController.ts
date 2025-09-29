import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daxes")
export default class DaxController {
  @operation({
    summary: "Get Daxes",
  })
  @get()
  static getDaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dax",
  })
  @post("{id}")
  static createDax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
