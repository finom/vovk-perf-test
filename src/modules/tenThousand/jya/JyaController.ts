import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyas")
export default class JyaController {
  @operation({
    summary: "Get Jyas",
  })
  @get()
  static getJyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jya",
  })
  @post("{id}")
  static createJya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
