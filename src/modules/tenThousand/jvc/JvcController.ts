import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvcs")
export default class JvcController {
  @operation({
    summary: "Get Jvcs",
  })
  @get()
  static getJvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvc",
  })
  @post("{id}")
  static createJvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
