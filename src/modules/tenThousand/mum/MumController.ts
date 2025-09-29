import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mums")
export default class MumController {
  @operation({
    summary: "Get Mums",
  })
  @get()
  static getMums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mum",
  })
  @post("{id}")
  static createMum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
