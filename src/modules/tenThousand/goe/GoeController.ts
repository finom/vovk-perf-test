import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goes")
export default class GoeController {
  @operation({
    summary: "Get Goes",
  })
  @get()
  static getGoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goe",
  })
  @post("{id}")
  static createGoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
