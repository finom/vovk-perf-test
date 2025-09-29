import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkos")
export default class JkoController {
  @operation({
    summary: "Get Jkos",
  })
  @get()
  static getJkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jko",
  })
  @post("{id}")
  static createJko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
