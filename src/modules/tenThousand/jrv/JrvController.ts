import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrvs")
export default class JrvController {
  @operation({
    summary: "Get Jrvs",
  })
  @get()
  static getJrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrv",
  })
  @post("{id}")
  static createJrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
