import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ps")
export default class PController {
  @operation({
    summary: "Get PS",
  })
  @get()
  static getPS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create P",
  })
  @post("{id}")
  static createP = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
