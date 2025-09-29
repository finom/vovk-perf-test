import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vcs")
export default class VcController {
  @operation({
    summary: "Get Vcs",
  })
  @get()
  static getVcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vc",
  })
  @post("{id}")
  static createVc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
