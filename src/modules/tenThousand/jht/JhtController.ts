import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhts")
export default class JhtController {
  @operation({
    summary: "Get Jhts",
  })
  @get()
  static getJhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jht",
  })
  @post("{id}")
  static createJht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
