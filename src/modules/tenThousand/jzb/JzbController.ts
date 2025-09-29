import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzbs")
export default class JzbController {
  @operation({
    summary: "Get Jzbs",
  })
  @get()
  static getJzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzb",
  })
  @post("{id}")
  static createJzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
