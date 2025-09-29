import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knws")
export default class KnwController {
  @operation({
    summary: "Get Knws",
  })
  @get()
  static getKnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knw",
  })
  @post("{id}")
  static createKnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
