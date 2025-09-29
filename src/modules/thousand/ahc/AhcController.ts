import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahcs")
export default class AhcController {
  @operation({
    summary: "Get Ahcs",
  })
  @get()
  static getAhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahc",
  })
  @post("{id}")
  static createAhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
