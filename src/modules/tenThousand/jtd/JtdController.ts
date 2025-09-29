import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtds")
export default class JtdController {
  @operation({
    summary: "Get Jtds",
  })
  @get()
  static getJtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtd",
  })
  @post("{id}")
  static createJtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
