import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxfs")
export default class LxfController {
  @operation({
    summary: "Get Lxfs",
  })
  @get()
  static getLxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxf",
  })
  @post("{id}")
  static createLxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
