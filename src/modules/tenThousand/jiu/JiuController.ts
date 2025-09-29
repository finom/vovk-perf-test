import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jius")
export default class JiuController {
  @operation({
    summary: "Get Jius",
  })
  @get()
  static getJius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jiu",
  })
  @post("{id}")
  static createJiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
