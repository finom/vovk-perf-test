import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bovs")
export default class BovController {
  @operation({
    summary: "Get Bovs",
  })
  @get()
  static getBovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bov",
  })
  @post("{id}")
  static createBov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
