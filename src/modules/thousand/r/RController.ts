import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rs")
export default class RController {
  @operation({
    summary: "Get RS",
  })
  @get()
  static getRS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create R",
  })
  @post("{id}")
  static createR = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
