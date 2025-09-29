import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edhs")
export default class EdhController {
  @operation({
    summary: "Get Edhs",
  })
  @get()
  static getEdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edh",
  })
  @post("{id}")
  static createEdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
