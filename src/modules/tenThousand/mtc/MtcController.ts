import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtcs")
export default class MtcController {
  @operation({
    summary: "Get Mtcs",
  })
  @get()
  static getMtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtc",
  })
  @post("{id}")
  static createMtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
