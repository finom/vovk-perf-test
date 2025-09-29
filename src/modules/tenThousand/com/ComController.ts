import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coms")
export default class ComController {
  @operation({
    summary: "Get Coms",
  })
  @get()
  static getComs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Com",
  })
  @post("{id}")
  static createCom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
