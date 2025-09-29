import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifms")
export default class IfmController {
  @operation({
    summary: "Get Ifms",
  })
  @get()
  static getIfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifm",
  })
  @post("{id}")
  static createIfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
