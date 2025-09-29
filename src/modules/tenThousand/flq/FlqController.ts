import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flqs")
export default class FlqController {
  @operation({
    summary: "Get Flqs",
  })
  @get()
  static getFlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flq",
  })
  @post("{id}")
  static createFlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
