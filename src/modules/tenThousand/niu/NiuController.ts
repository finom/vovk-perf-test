import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nius")
export default class NiuController {
  @operation({
    summary: "Get Nius",
  })
  @get()
  static getNius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Niu",
  })
  @post("{id}")
  static createNiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
