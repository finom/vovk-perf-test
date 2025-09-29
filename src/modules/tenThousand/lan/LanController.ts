import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lans")
export default class LanController {
  @operation({
    summary: "Get Lans",
  })
  @get()
  static getLans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lan",
  })
  @post("{id}")
  static createLan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
