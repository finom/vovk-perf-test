import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jus")
export default class JuController {
  @operation({
    summary: "Get Jus",
  })
  @get()
  static getJus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ju",
  })
  @post("{id}")
  static createJu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
