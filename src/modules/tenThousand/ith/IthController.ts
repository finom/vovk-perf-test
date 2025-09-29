import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iths")
export default class IthController {
  @operation({
    summary: "Get Iths",
  })
  @get()
  static getIths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ith",
  })
  @post("{id}")
  static createIth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
