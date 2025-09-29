import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaes")
export default class JaeController {
  @operation({
    summary: "Get Jaes",
  })
  @get()
  static getJaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jae",
  })
  @post("{id}")
  static createJae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
