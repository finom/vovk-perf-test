import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bohs")
export default class BohController {
  @operation({
    summary: "Get Bohs",
  })
  @get()
  static getBohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boh",
  })
  @post("{id}")
  static createBoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
