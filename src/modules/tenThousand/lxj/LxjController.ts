import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxjs")
export default class LxjController {
  @operation({
    summary: "Get Lxjs",
  })
  @get()
  static getLxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxj",
  })
  @post("{id}")
  static createLxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
