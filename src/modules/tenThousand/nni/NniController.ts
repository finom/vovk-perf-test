import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnis")
export default class NniController {
  @operation({
    summary: "Get Nnis",
  })
  @get()
  static getNnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nni",
  })
  @post("{id}")
  static createNni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
