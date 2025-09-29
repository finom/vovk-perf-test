import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myqs")
export default class MyqController {
  @operation({
    summary: "Get Myqs",
  })
  @get()
  static getMyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myq",
  })
  @post("{id}")
  static createMyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
