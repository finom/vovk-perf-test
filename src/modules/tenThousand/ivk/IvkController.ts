import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivks")
export default class IvkController {
  @operation({
    summary: "Get Ivks",
  })
  @get()
  static getIvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivk",
  })
  @post("{id}")
  static createIvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
