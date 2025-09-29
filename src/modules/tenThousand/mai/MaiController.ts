import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mais")
export default class MaiController {
  @operation({
    summary: "Get Mais",
  })
  @get()
  static getMais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mai",
  })
  @post("{id}")
  static createMai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
