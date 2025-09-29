import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikts")
export default class IktController {
  @operation({
    summary: "Get Ikts",
  })
  @get()
  static getIkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikt",
  })
  @post("{id}")
  static createIkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
