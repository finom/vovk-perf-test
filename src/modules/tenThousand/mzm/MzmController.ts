import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzms")
export default class MzmController {
  @operation({
    summary: "Get Mzms",
  })
  @get()
  static getMzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzm",
  })
  @post("{id}")
  static createMzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
