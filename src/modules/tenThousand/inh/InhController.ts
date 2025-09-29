import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inhs")
export default class InhController {
  @operation({
    summary: "Get Inhs",
  })
  @get()
  static getInhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inh",
  })
  @post("{id}")
  static createInh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
