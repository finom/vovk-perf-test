import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("us")
export default class MeController {
  @operation({
    summary: "Get Us",
  })
  @get()
  static getUs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Me",
  })
  @post("{id}")
  static createMe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
