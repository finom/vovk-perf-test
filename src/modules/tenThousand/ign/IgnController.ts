import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igns")
export default class IgnController {
  @operation({
    summary: "Get Igns",
  })
  @get()
  static getIgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ign",
  })
  @post("{id}")
  static createIgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
