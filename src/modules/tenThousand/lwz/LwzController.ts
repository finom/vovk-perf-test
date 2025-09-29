import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwzs")
export default class LwzController {
  @operation({
    summary: "Get Lwzs",
  })
  @get()
  static getLwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwz",
  })
  @post("{id}")
  static createLwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
