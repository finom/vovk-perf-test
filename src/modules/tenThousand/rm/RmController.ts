import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rms")
export default class RmController {
  @operation({
    summary: "Get Rms",
  })
  @get()
  static getRms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rm",
  })
  @post("{id}")
  static createRm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
