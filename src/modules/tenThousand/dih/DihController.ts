import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dihs")
export default class DihController {
  @operation({
    summary: "Get Dihs",
  })
  @get()
  static getDihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dih",
  })
  @post("{id}")
  static createDih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
