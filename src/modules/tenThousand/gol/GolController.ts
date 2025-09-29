import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gols")
export default class GolController {
  @operation({
    summary: "Get Gols",
  })
  @get()
  static getGols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gol",
  })
  @post("{id}")
  static createGol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
