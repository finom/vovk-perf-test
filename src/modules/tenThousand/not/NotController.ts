import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nots")
export default class NotController {
  @operation({
    summary: "Get Nots",
  })
  @get()
  static getNots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Not",
  })
  @post("{id}")
  static createNot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
