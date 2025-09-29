import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huts")
export default class HutController {
  @operation({
    summary: "Get Huts",
  })
  @get()
  static getHuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hut",
  })
  @post("{id}")
  static createHut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
