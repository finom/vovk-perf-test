import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lies")
export default class LieController {
  @operation({
    summary: "Get Lies",
  })
  @get()
  static getLies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lie",
  })
  @post("{id}")
  static createLie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
