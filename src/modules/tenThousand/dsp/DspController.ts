import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsps")
export default class DspController {
  @operation({
    summary: "Get Dsps",
  })
  @get()
  static getDsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsp",
  })
  @post("{id}")
  static createDsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
