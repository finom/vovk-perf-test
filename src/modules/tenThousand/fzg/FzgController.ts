import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzgs")
export default class FzgController {
  @operation({
    summary: "Get Fzgs",
  })
  @get()
  static getFzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzg",
  })
  @post("{id}")
  static createFzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
