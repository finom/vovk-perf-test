import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkas")
export default class JkaController {
  @operation({
    summary: "Get Jkas",
  })
  @get()
  static getJkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jka",
  })
  @post("{id}")
  static createJka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
