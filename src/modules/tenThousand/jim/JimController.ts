import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jims")
export default class JimController {
  @operation({
    summary: "Get Jims",
  })
  @get()
  static getJims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jim",
  })
  @post("{id}")
  static createJim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
