import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivvs")
export default class IvvController {
  @operation({
    summary: "Get Ivvs",
  })
  @get()
  static getIvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivv",
  })
  @post("{id}")
  static createIvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
