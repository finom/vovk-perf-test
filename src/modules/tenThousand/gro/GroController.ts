import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("groes")
export default class GroController {
  @operation({
    summary: "Get Groes",
  })
  @get()
  static getGroes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gro",
  })
  @post("{id}")
  static createGro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
