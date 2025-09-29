import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idls")
export default class IdlController {
  @operation({
    summary: "Get Idls",
  })
  @get()
  static getIdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idl",
  })
  @post("{id}")
  static createIdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
