import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkies")
export default class JkyController {
  @operation({
    summary: "Get Jkies",
  })
  @get()
  static getJkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jky",
  })
  @post("{id}")
  static createJky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
