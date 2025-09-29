import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzds")
export default class JzdController {
  @operation({
    summary: "Get Jzds",
  })
  @get()
  static getJzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzd",
  })
  @post("{id}")
  static createJzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
