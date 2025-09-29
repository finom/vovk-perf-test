import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amps")
export default class AmpController {
  @operation({
    summary: "Get Amps",
  })
  @get()
  static getAmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amp",
  })
  @post("{id}")
  static createAmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
