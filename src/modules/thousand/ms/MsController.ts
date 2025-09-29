import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ms")
export default class MsController {
  @operation({
    summary: "Get Ms",
  })
  @get()
  static getMs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ms",
  })
  @post("{id}")
  static createMs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
