import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljxes")
export default class LjxController {
  @operation({
    summary: "Get Ljxes",
  })
  @get()
  static getLjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljx",
  })
  @post("{id}")
  static createLjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
