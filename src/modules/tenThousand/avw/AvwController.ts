import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avws")
export default class AvwController {
  @operation({
    summary: "Get Avws",
  })
  @get()
  static getAvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avw",
  })
  @post("{id}")
  static createAvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
