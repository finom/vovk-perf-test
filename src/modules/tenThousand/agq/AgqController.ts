import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agqs")
export default class AgqController {
  @operation({
    summary: "Get Agqs",
  })
  @get()
  static getAgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agq",
  })
  @post("{id}")
  static createAgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
