import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoqs")
export default class AoqController {
  @operation({
    summary: "Get Aoqs",
  })
  @get()
  static getAoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoq",
  })
  @post("{id}")
  static createAoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
