import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mors")
export default class MorController {
  @operation({
    summary: "Get Mors",
  })
  @get()
  static getMors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mor",
  })
  @post("{id}")
  static createMor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
