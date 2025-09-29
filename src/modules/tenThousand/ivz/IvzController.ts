import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivzs")
export default class IvzController {
  @operation({
    summary: "Get Ivzs",
  })
  @get()
  static getIvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivz",
  })
  @post("{id}")
  static createIvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
