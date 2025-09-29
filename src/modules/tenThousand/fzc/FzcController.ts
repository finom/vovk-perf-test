import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzcs")
export default class FzcController {
  @operation({
    summary: "Get Fzcs",
  })
  @get()
  static getFzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzc",
  })
  @post("{id}")
  static createFzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
