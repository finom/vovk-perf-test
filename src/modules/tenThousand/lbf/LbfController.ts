import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbfs")
export default class LbfController {
  @operation({
    summary: "Get Lbfs",
  })
  @get()
  static getLbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbf",
  })
  @post("{id}")
  static createLbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
