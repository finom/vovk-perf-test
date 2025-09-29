import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idzs")
export default class IdzController {
  @operation({
    summary: "Get Idzs",
  })
  @get()
  static getIdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idz",
  })
  @post("{id}")
  static createIdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
