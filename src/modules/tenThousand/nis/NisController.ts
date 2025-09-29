import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nis")
export default class NisController {
  @operation({
    summary: "Get Nis",
  })
  @get()
  static getNis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nis",
  })
  @post("{id}")
  static createNis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
