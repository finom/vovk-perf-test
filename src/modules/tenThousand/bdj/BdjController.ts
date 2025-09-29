import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdjs")
export default class BdjController {
  @operation({
    summary: "Get Bdjs",
  })
  @get()
  static getBdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdj",
  })
  @post("{id}")
  static createBdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
