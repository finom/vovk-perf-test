import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpcs")
export default class MpcController {
  @operation({
    summary: "Get Mpcs",
  })
  @get()
  static getMpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpc",
  })
  @post("{id}")
  static createMpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
