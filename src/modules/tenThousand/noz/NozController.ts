import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nozs")
export default class NozController {
  @operation({
    summary: "Get Nozs",
  })
  @get()
  static getNozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noz",
  })
  @post("{id}")
  static createNoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
