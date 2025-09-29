import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myps")
export default class MypController {
  @operation({
    summary: "Get Myps",
  })
  @get()
  static getMyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myp",
  })
  @post("{id}")
  static createMyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
