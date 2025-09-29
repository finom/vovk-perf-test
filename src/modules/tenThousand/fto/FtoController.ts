import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftos")
export default class FtoController {
  @operation({
    summary: "Get Ftos",
  })
  @get()
  static getFtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fto",
  })
  @post("{id}")
  static createFto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
