import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxis")
export default class LxiController {
  @operation({
    summary: "Get Lxis",
  })
  @get()
  static getLxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxi",
  })
  @post("{id}")
  static createLxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
