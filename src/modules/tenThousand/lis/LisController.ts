import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lis")
export default class LisController {
  @operation({
    summary: "Get Lis",
  })
  @get()
  static getLis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lis",
  })
  @post("{id}")
  static createLis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
