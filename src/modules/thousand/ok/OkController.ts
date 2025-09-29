import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oks")
export default class OkController {
  @operation({
    summary: "Get Oks",
  })
  @get()
  static getOks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ok",
  })
  @post("{id}")
  static createOk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
