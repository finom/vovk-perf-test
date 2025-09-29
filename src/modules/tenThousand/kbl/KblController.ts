import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbls")
export default class KblController {
  @operation({
    summary: "Get Kbls",
  })
  @get()
  static getKbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbl",
  })
  @post("{id}")
  static createKbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
