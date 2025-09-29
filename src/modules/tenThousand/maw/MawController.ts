import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maws")
export default class MawController {
  @operation({
    summary: "Get Maws",
  })
  @get()
  static getMaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Maw",
  })
  @post("{id}")
  static createMaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
