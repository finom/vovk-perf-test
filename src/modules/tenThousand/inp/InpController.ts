import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inps")
export default class InpController {
  @operation({
    summary: "Get Inps",
  })
  @get()
  static getInps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inp",
  })
  @post("{id}")
  static createInp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
