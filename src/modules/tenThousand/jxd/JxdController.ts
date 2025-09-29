import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxds")
export default class JxdController {
  @operation({
    summary: "Get Jxds",
  })
  @get()
  static getJxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxd",
  })
  @post("{id}")
  static createJxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
