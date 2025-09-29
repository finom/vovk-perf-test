import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlhs")
export default class HlhController {
  @operation({
    summary: "Get Hlhs",
  })
  @get()
  static getHlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlh",
  })
  @post("{id}")
  static createHlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
