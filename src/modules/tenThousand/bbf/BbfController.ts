import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbfs")
export default class BbfController {
  @operation({
    summary: "Get Bbfs",
  })
  @get()
  static getBbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbf",
  })
  @post("{id}")
  static createBbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
