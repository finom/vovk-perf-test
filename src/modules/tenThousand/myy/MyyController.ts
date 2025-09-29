import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myys")
export default class MyyController {
  @operation({
    summary: "Get Myys",
  })
  @get()
  static getMyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myy",
  })
  @post("{id}")
  static createMyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
