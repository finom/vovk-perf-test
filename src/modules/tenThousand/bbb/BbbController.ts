import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbbs")
export default class BbbController {
  @operation({
    summary: "Get Bbbs",
  })
  @get()
  static getBbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbb",
  })
  @post("{id}")
  static createBbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
