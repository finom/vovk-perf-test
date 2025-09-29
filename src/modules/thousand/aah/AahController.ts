import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aahs")
export default class AahController {
  @operation({
    summary: "Get Aahs",
  })
  @get()
  static getAahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aah",
  })
  @post("{id}")
  static createAah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
