import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcis")
export default class MciController {
  @operation({
    summary: "Get Mcis",
  })
  @get()
  static getMcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mci",
  })
  @post("{id}")
  static createMci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
