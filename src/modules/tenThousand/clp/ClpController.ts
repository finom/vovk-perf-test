import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clps")
export default class ClpController {
  @operation({
    summary: "Get Clps",
  })
  @get()
  static getClps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clp",
  })
  @post("{id}")
  static createClp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
