import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afhs")
export default class AfhController {
  @operation({
    summary: "Get Afhs",
  })
  @get()
  static getAfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afh",
  })
  @post("{id}")
  static createAfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
