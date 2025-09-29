import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iags")
export default class IagController {
  @operation({
    summary: "Get Iags",
  })
  @get()
  static getIags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iag",
  })
  @post("{id}")
  static createIag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
