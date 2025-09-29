import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvis")
export default class JviController {
  @operation({
    summary: "Get Jvis",
  })
  @get()
  static getJvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvi",
  })
  @post("{id}")
  static createJvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
