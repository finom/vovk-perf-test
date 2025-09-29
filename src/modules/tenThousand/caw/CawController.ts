import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caws")
export default class CawController {
  @operation({
    summary: "Get Caws",
  })
  @get()
  static getCaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Caw",
  })
  @post("{id}")
  static createCaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
