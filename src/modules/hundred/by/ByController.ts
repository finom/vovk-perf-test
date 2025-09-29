import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bies")
export default class ByController {
  @operation({
    summary: "Get Bies",
  })
  @get()
  static getBies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create By",
  })
  @post("{id}")
  static createBy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
