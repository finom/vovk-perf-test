import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgies")
export default class JgyController {
  @operation({
    summary: "Get Jgies",
  })
  @get()
  static getJgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgy",
  })
  @post("{id}")
  static createJgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
