import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbies")
export default class MbyController {
  @operation({
    summary: "Get Mbies",
  })
  @get()
  static getMbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mby",
  })
  @post("{id}")
  static createMby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
