import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agcs")
export default class AgcController {
  @operation({
    summary: "Get Agcs",
  })
  @get()
  static getAgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agc",
  })
  @post("{id}")
  static createAgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
