import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdws")
export default class HdwController {
  @operation({
    summary: "Get Hdws",
  })
  @get()
  static getHdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdw",
  })
  @post("{id}")
  static createHdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
