import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msps")
export default class MspController {
  @operation({
    summary: "Get Msps",
  })
  @get()
  static getMsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msp",
  })
  @post("{id}")
  static createMsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
