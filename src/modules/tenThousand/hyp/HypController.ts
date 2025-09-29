import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyps")
export default class HypController {
  @operation({
    summary: "Get Hyps",
  })
  @get()
  static getHyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyp",
  })
  @post("{id}")
  static createHyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
