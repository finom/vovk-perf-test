import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edgs")
export default class EdgController {
  @operation({
    summary: "Get Edgs",
  })
  @get()
  static getEdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edg",
  })
  @post("{id}")
  static createEdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
