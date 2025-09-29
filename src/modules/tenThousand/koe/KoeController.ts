import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koes")
export default class KoeController {
  @operation({
    summary: "Get Koes",
  })
  @get()
  static getKoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koe",
  })
  @post("{id}")
  static createKoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
