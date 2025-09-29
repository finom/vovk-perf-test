import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtcs")
export default class JtcController {
  @operation({
    summary: "Get Jtcs",
  })
  @get()
  static getJtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtc",
  })
  @post("{id}")
  static createJtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
