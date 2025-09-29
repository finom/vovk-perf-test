import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijhs")
export default class IjhController {
  @operation({
    summary: "Get Ijhs",
  })
  @get()
  static getIjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijh",
  })
  @post("{id}")
  static createIjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
