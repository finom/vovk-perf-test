import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahds")
export default class AhdController {
  @operation({
    summary: "Get Ahds",
  })
  @get()
  static getAhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahd",
  })
  @post("{id}")
  static createAhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
