import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msms")
export default class MsmController {
  @operation({
    summary: "Get Msms",
  })
  @get()
  static getMsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msm",
  })
  @post("{id}")
  static createMsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
