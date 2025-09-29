import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idies")
export default class IdyController {
  @operation({
    summary: "Get Idies",
  })
  @get()
  static getIdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idy",
  })
  @post("{id}")
  static createIdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
