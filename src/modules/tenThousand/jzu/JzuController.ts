import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzus")
export default class JzuController {
  @operation({
    summary: "Get Jzus",
  })
  @get()
  static getJzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzu",
  })
  @post("{id}")
  static createJzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
