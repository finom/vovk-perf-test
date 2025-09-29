import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hoos")
export default class HooController {
  @operation({
    summary: "Get Hoos",
  })
  @get()
  static getHoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoo",
  })
  @post("{id}")
  static createHoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
