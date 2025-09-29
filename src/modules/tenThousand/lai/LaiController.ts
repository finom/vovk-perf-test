import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lais")
export default class LaiController {
  @operation({
    summary: "Get Lais",
  })
  @get()
  static getLais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lai",
  })
  @post("{id}")
  static createLai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
