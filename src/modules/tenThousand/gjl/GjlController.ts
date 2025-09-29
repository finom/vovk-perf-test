import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjls")
export default class GjlController {
  @operation({
    summary: "Get Gjls",
  })
  @get()
  static getGjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjl",
  })
  @post("{id}")
  static createGjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
