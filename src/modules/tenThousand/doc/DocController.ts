import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("docs")
export default class DocController {
  @operation({
    summary: "Get Docs",
  })
  @get()
  static getDocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doc",
  })
  @post("{id}")
  static createDoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
