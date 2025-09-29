import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imds")
export default class ImdController {
  @operation({
    summary: "Get Imds",
  })
  @get()
  static getImds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imd",
  })
  @post("{id}")
  static createImd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
