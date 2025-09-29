import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jups")
export default class JupController {
  @operation({
    summary: "Get Jups",
  })
  @get()
  static getJups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jup",
  })
  @post("{id}")
  static createJup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
