import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mabs")
export default class MabController {
  @operation({
    summary: "Get Mabs",
  })
  @get()
  static getMabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mab",
  })
  @post("{id}")
  static createMab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
