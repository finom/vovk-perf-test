import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffps")
export default class FfpController {
  @operation({
    summary: "Get Ffps",
  })
  @get()
  static getFfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffp",
  })
  @post("{id}")
  static createFfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
