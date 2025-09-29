import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfws")
export default class BfwController {
  @operation({
    summary: "Get Bfws",
  })
  @get()
  static getBfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfw",
  })
  @post("{id}")
  static createBfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
