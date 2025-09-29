import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhls")
export default class JhlController {
  @operation({
    summary: "Get Jhls",
  })
  @get()
  static getJhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhl",
  })
  @post("{id}")
  static createJhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
