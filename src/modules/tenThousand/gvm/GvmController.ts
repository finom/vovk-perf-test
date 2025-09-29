import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvms")
export default class GvmController {
  @operation({
    summary: "Get Gvms",
  })
  @get()
  static getGvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvm",
  })
  @post("{id}")
  static createGvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
