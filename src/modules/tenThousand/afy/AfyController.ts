import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afies")
export default class AfyController {
  @operation({
    summary: "Get Afies",
  })
  @get()
  static getAfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afy",
  })
  @post("{id}")
  static createAfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
