import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jijs")
export default class JijController {
  @operation({
    summary: "Get Jijs",
  })
  @get()
  static getJijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jij",
  })
  @post("{id}")
  static createJij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
