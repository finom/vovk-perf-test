import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guzs")
export default class GuzController {
  @operation({
    summary: "Get Guzs",
  })
  @get()
  static getGuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guz",
  })
  @post("{id}")
  static createGuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
