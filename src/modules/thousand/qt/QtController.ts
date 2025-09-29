import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qts")
export default class QtController {
  @operation({
    summary: "Get Qts",
  })
  @get()
  static getQts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qt",
  })
  @post("{id}")
  static createQt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
