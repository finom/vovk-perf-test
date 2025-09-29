import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvms")
export default class BvmController {
  @operation({
    summary: "Get Bvms",
  })
  @get()
  static getBvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvm",
  })
  @post("{id}")
  static createBvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
