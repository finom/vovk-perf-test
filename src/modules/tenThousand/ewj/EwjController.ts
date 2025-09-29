import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewjs")
export default class EwjController {
  @operation({
    summary: "Get Ewjs",
  })
  @get()
  static getEwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewj",
  })
  @post("{id}")
  static createEwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
