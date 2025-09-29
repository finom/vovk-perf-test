import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tos")
export default class ToController {
  @operation({
    summary: "Get Tos",
  })
  @get()
  static getTos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create To",
  })
  @post("{id}")
  static createTo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
