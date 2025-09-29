import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjus")
export default class JjuController {
  @operation({
    summary: "Get Jjus",
  })
  @get()
  static getJjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jju",
  })
  @post("{id}")
  static createJju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
