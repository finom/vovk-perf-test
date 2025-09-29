import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jers")
export default class JerController {
  @operation({
    summary: "Get Jers",
  })
  @get()
  static getJers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jer",
  })
  @post("{id}")
  static createJer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
