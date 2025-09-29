import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gahs")
export default class GahController {
  @operation({
    summary: "Get Gahs",
  })
  @get()
  static getGahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gah",
  })
  @post("{id}")
  static createGah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
