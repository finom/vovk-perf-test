import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnms")
export default class HnmController {
  @operation({
    summary: "Get Hnms",
  })
  @get()
  static getHnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnm",
  })
  @post("{id}")
  static createHnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
