import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jios")
export default class JioController {
  @operation({
    summary: "Get Jios",
  })
  @get()
  static getJios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jio",
  })
  @post("{id}")
  static createJio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
