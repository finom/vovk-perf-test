import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itqs")
export default class ItqController {
  @operation({
    summary: "Get Itqs",
  })
  @get()
  static getItqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itq",
  })
  @post("{id}")
  static createItq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
