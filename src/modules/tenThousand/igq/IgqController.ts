import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igqs")
export default class IgqController {
  @operation({
    summary: "Get Igqs",
  })
  @get()
  static getIgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igq",
  })
  @post("{id}")
  static createIgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
