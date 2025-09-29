import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mers")
export default class MerController {
  @operation({
    summary: "Get Mers",
  })
  @get()
  static getMers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mer",
  })
  @post("{id}")
  static createMer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
