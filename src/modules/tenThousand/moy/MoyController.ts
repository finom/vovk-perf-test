import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moys")
export default class MoyController {
  @operation({
    summary: "Get Moys",
  })
  @get()
  static getMoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moy",
  })
  @post("{id}")
  static createMoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
