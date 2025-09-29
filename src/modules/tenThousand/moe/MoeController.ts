import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moes")
export default class MoeController {
  @operation({
    summary: "Get Moes",
  })
  @get()
  static getMoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moe",
  })
  @post("{id}")
  static createMoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
