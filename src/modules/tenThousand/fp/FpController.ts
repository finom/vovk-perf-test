import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fps")
export default class FpController {
  @operation({
    summary: "Get Fps",
  })
  @get()
  static getFps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fp",
  })
  @post("{id}")
  static createFp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
