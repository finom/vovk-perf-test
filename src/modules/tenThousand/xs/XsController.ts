import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xs")
export default class XsController {
  @operation({
    summary: "Get Xs",
  })
  @get()
  static getXs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xs",
  })
  @post("{id}")
  static createXs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
