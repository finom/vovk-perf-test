import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nihs")
export default class NihController {
  @operation({
    summary: "Get Nihs",
  })
  @get()
  static getNihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nih",
  })
  @post("{id}")
  static createNih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
