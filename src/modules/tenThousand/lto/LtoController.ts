import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltos")
export default class LtoController {
  @operation({
    summary: "Get Ltos",
  })
  @get()
  static getLtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lto",
  })
  @post("{id}")
  static createLto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
