import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alqs")
export default class AlqController {
  @operation({
    summary: "Get Alqs",
  })
  @get()
  static getAlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alq",
  })
  @post("{id}")
  static createAlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
