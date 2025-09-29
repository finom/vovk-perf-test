import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdjs")
export default class MdjController {
  @operation({
    summary: "Get Mdjs",
  })
  @get()
  static getMdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdj",
  })
  @post("{id}")
  static createMdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
