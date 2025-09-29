import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzes")
export default class JzeController {
  @operation({
    summary: "Get Jzes",
  })
  @get()
  static getJzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jze",
  })
  @post("{id}")
  static createJze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
