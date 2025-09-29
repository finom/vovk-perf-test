import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyus")
export default class JyuController {
  @operation({
    summary: "Get Jyus",
  })
  @get()
  static getJyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyu",
  })
  @post("{id}")
  static createJyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
