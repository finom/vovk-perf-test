import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emjs")
export default class EmjController {
  @operation({
    summary: "Get Emjs",
  })
  @get()
  static getEmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emj",
  })
  @post("{id}")
  static createEmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
