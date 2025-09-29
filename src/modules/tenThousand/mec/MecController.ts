import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mecs")
export default class MecController {
  @operation({
    summary: "Get Mecs",
  })
  @get()
  static getMecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mec",
  })
  @post("{id}")
  static createMec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
