import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jocs")
export default class JocController {
  @operation({
    summary: "Get Jocs",
  })
  @get()
  static getJocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joc",
  })
  @post("{id}")
  static createJoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
