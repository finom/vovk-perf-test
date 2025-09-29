import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abs")
export default class AbController {
  @operation({
    summary: "Get Abs",
  })
  @get()
  static getAbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ab",
  })
  @post("{id}")
  static createAb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
