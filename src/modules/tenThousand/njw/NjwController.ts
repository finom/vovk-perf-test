import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njws")
export default class NjwController {
  @operation({
    summary: "Get Njws",
  })
  @get()
  static getNjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njw",
  })
  @post("{id}")
  static createNjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
