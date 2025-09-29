import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzies")
export default class JzyController {
  @operation({
    summary: "Get Jzies",
  })
  @get()
  static getJzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzy",
  })
  @post("{id}")
  static createJzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
