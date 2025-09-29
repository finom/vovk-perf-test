import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clhs")
export default class ClhController {
  @operation({
    summary: "Get Clhs",
  })
  @get()
  static getClhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clh",
  })
  @post("{id}")
  static createClh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
