import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jehs")
export default class JehController {
  @operation({
    summary: "Get Jehs",
  })
  @get()
  static getJehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jeh",
  })
  @post("{id}")
  static createJeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
