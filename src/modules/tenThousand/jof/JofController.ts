import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jofs")
export default class JofController {
  @operation({
    summary: "Get Jofs",
  })
  @get()
  static getJofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jof",
  })
  @post("{id}")
  static createJof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
