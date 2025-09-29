import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhies")
export default class JhyController {
  @operation({
    summary: "Get Jhies",
  })
  @get()
  static getJhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhy",
  })
  @post("{id}")
  static createJhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
