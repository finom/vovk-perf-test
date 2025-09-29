import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apqs")
export default class ApqController {
  @operation({
    summary: "Get Apqs",
  })
  @get()
  static getApqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apq",
  })
  @post("{id}")
  static createApq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
