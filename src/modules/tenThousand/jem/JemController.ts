import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jems")
export default class JemController {
  @operation({
    summary: "Get Jems",
  })
  @get()
  static getJems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jem",
  })
  @post("{id}")
  static createJem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
