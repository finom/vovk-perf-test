import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpws")
export default class BpwController {
  @operation({
    summary: "Get Bpws",
  })
  @get()
  static getBpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpw",
  })
  @post("{id}")
  static createBpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
