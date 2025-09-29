import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivrs")
export default class IvrController {
  @operation({
    summary: "Get Ivrs",
  })
  @get()
  static getIvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivr",
  })
  @post("{id}")
  static createIvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
