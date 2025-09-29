import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvas")
export default class LvaController {
  @operation({
    summary: "Get Lvas",
  })
  @get()
  static getLvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lva",
  })
  @post("{id}")
  static createLva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
