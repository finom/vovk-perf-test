import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzms")
export default class FzmController {
  @operation({
    summary: "Get Fzms",
  })
  @get()
  static getFzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzm",
  })
  @post("{id}")
  static createFzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
