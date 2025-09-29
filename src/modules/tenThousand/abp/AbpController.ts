import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abps")
export default class AbpController {
  @operation({
    summary: "Get Abps",
  })
  @get()
  static getAbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abp",
  })
  @post("{id}")
  static createAbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
