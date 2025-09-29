import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcus")
export default class JcuController {
  @operation({
    summary: "Get Jcus",
  })
  @get()
  static getJcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcu",
  })
  @post("{id}")
  static createJcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
