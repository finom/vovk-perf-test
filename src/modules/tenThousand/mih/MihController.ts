import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mihs")
export default class MihController {
  @operation({
    summary: "Get Mihs",
  })
  @get()
  static getMihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mih",
  })
  @post("{id}")
  static createMih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
