import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdjs")
export default class JdjController {
  @operation({
    summary: "Get Jdjs",
  })
  @get()
  static getJdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdj",
  })
  @post("{id}")
  static createJdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
