import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ans")
export default class AnsController {
  @operation({
    summary: "Get Ans",
  })
  @get()
  static getAns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ans",
  })
  @post("{id}")
  static createAns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
