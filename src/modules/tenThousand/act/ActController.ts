import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acts")
export default class ActController {
  @operation({
    summary: "Get Acts",
  })
  @get()
  static getActs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Act",
  })
  @post("{id}")
  static createAct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
