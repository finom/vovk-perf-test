import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byes")
export default class ByeController {
  @operation({
    summary: "Get Byes",
  })
  @get()
  static getByes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bye",
  })
  @post("{id}")
  static createBye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
