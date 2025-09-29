import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxxes")
export default class HxxController {
  @operation({
    summary: "Get Hxxes",
  })
  @get()
  static getHxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxx",
  })
  @post("{id}")
  static createHxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
