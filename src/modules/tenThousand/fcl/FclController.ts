import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcls")
export default class FclController {
  @operation({
    summary: "Get Fcls",
  })
  @get()
  static getFcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcl",
  })
  @post("{id}")
  static createFcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
