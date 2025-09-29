import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhls")
export default class BhlController {
  @operation({
    summary: "Get Bhls",
  })
  @get()
  static getBhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhl",
  })
  @post("{id}")
  static createBhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
