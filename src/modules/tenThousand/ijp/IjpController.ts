import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijps")
export default class IjpController {
  @operation({
    summary: "Get Ijps",
  })
  @get()
  static getIjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijp",
  })
  @post("{id}")
  static createIjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
