import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jis")
export default class JisController {
  @operation({
    summary: "Get Jis",
  })
  @get()
  static getJis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jis",
  })
  @post("{id}")
  static createJis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
