import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njxes")
export default class NjxController {
  @operation({
    summary: "Get Njxes",
  })
  @get()
  static getNjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njx",
  })
  @post("{id}")
  static createNjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
