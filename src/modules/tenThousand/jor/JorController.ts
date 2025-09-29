import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jors")
export default class JorController {
  @operation({
    summary: "Get Jors",
  })
  @get()
  static getJors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jor",
  })
  @post("{id}")
  static createJor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
