import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njms")
export default class NjmController {
  @operation({
    summary: "Get Njms",
  })
  @get()
  static getNjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njm",
  })
  @post("{id}")
  static createNjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
