import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxis")
export default class JxiController {
  @operation({
    summary: "Get Jxis",
  })
  @get()
  static getJxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxi",
  })
  @post("{id}")
  static createJxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
