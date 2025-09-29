import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrzs")
export default class LrzController {
  @operation({
    summary: "Get Lrzs",
  })
  @get()
  static getLrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrz",
  })
  @post("{id}")
  static createLrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
