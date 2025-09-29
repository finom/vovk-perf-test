import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdas")
export default class JdaController {
  @operation({
    summary: "Get Jdas",
  })
  @get()
  static getJdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jda",
  })
  @post("{id}")
  static createJda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
