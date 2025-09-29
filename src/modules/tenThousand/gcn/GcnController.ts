import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcns")
export default class GcnController {
  @operation({
    summary: "Get Gcns",
  })
  @get()
  static getGcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcn",
  })
  @post("{id}")
  static createGcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
