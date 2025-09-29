import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bius")
export default class BiuController {
  @operation({
    summary: "Get Bius",
  })
  @get()
  static getBius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Biu",
  })
  @post("{id}")
  static createBiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
