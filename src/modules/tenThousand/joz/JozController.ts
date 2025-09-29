import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jozs")
export default class JozController {
  @operation({
    summary: "Get Jozs",
  })
  @get()
  static getJozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joz",
  })
  @post("{id}")
  static createJoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
