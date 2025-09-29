import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joos")
export default class JooController {
  @operation({
    summary: "Get Joos",
  })
  @get()
  static getJoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joo",
  })
  @post("{id}")
  static createJoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
