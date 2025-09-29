import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieqs")
export default class IeqController {
  @operation({
    summary: "Get Ieqs",
  })
  @get()
  static getIeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ieq",
  })
  @post("{id}")
  static createIeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
