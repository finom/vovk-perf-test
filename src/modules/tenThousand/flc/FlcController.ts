import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flcs")
export default class FlcController {
  @operation({
    summary: "Get Flcs",
  })
  @get()
  static getFlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flc",
  })
  @post("{id}")
  static createFlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
