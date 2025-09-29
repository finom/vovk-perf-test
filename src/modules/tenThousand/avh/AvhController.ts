import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avhs")
export default class AvhController {
  @operation({
    summary: "Get Avhs",
  })
  @get()
  static getAvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avh",
  })
  @post("{id}")
  static createAvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
