import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laus")
export default class LauController {
  @operation({
    summary: "Get Laus",
  })
  @get()
  static getLaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lau",
  })
  @post("{id}")
  static createLau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
