import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dezs")
export default class DezController {
  @operation({
    summary: "Get Dezs",
  })
  @get()
  static getDezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dez",
  })
  @post("{id}")
  static createDez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
