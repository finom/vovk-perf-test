import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ts")
export default class TsController {
  @operation({
    summary: "Get Ts",
  })
  @get()
  static getTs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ts",
  })
  @post("{id}")
  static createTs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
