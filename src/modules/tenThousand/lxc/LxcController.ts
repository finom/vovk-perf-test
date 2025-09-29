import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxcs")
export default class LxcController {
  @operation({
    summary: "Get Lxcs",
  })
  @get()
  static getLxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxc",
  })
  @post("{id}")
  static createLxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
