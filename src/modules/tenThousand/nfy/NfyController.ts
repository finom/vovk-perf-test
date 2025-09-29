import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfies")
export default class NfyController {
  @operation({
    summary: "Get Nfies",
  })
  @get()
  static getNfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfy",
  })
  @post("{id}")
  static createNfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
