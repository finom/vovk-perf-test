import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("novs")
export default class NovController {
  @operation({
    summary: "Get Novs",
  })
  @get()
  static getNovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nov",
  })
  @post("{id}")
  static createNov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
