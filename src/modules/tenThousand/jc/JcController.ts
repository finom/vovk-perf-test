import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcs")
export default class JcController {
  @operation({
    summary: "Get Jcs",
  })
  @get()
  static getJcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jc",
  })
  @post("{id}")
  static createJc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
