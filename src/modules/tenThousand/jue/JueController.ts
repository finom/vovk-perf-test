import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jues")
export default class JueController {
  @operation({
    summary: "Get Jues",
  })
  @get()
  static getJues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jue",
  })
  @post("{id}")
  static createJue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
