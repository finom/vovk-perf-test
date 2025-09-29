import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdjs")
export default class FdjController {
  @operation({
    summary: "Get Fdjs",
  })
  @get()
  static getFdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdj",
  })
  @post("{id}")
  static createFdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
