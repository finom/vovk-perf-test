import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("boes")
export default class BoeController {
  @operation({
    summary: "Get Boes",
  })
  @get()
  static getBoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boe",
  })
  @post("{id}")
  static createBoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
