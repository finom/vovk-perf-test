import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nggs")
export default class NggController {
  @operation({
    summary: "Get Nggs",
  })
  @get()
  static getNggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngg",
  })
  @post("{id}")
  static createNgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
