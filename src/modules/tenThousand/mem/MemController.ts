import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mems")
export default class MemController {
  @operation({
    summary: "Get Mems",
  })
  @get()
  static getMems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mem",
  })
  @post("{id}")
  static createMem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
