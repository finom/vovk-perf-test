import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffos")
export default class FfoController {
  @operation({
    summary: "Get Ffos",
  })
  @get()
  static getFfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffo",
  })
  @post("{id}")
  static createFfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
