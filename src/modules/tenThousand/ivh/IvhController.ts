import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivhs")
export default class IvhController {
  @operation({
    summary: "Get Ivhs",
  })
  @get()
  static getIvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivh",
  })
  @post("{id}")
  static createIvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
