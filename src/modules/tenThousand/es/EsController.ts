import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("es")
export default class EsController {
  @operation({
    summary: "Get Es",
  })
  @get()
  static getEs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Es",
  })
  @post("{id}")
  static createEs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
