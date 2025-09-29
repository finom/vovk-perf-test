import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgus")
export default class JguController {
  @operation({
    summary: "Get Jgus",
  })
  @get()
  static getJgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgu",
  })
  @post("{id}")
  static createJgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
