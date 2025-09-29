import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffts")
export default class FftController {
  @operation({
    summary: "Get Ffts",
  })
  @get()
  static getFfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fft",
  })
  @post("{id}")
  static createFft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
