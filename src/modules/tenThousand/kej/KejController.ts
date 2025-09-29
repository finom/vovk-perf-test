import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kejs")
export default class KejController {
  @operation({
    summary: "Get Kejs",
  })
  @get()
  static getKejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kej",
  })
  @post("{id}")
  static createKej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
