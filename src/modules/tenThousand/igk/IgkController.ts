import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igks")
export default class IgkController {
  @operation({
    summary: "Get Igks",
  })
  @get()
  static getIgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igk",
  })
  @post("{id}")
  static createIgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
