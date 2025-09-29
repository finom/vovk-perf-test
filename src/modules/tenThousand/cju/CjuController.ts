import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjus")
export default class CjuController {
  @operation({
    summary: "Get Cjus",
  })
  @get()
  static getCjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cju",
  })
  @post("{id}")
  static createCju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
