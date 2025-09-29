import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blcs")
export default class BlcController {
  @operation({
    summary: "Get Blcs",
  })
  @get()
  static getBlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blc",
  })
  @post("{id}")
  static createBlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
