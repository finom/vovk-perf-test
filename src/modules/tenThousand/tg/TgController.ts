import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tgs")
export default class TgController {
  @operation({
    summary: "Get Tgs",
  })
  @get()
  static getTgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tg",
  })
  @post("{id}")
  static createTg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
