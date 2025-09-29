import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agxes")
export default class AgxController {
  @operation({
    summary: "Get Agxes",
  })
  @get()
  static getAgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agx",
  })
  @post("{id}")
  static createAgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
