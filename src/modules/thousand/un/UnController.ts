import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uns")
export default class UnController {
  @operation({
    summary: "Get Uns",
  })
  @get()
  static getUns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Un",
  })
  @post("{id}")
  static createUn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
