import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmus")
export default class JmuController {
  @operation({
    summary: "Get Jmus",
  })
  @get()
  static getJmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmu",
  })
  @post("{id}")
  static createJmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
