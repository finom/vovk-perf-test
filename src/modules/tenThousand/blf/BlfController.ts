import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blves")
export default class BlfController {
  @operation({
    summary: "Get Blves",
  })
  @get()
  static getBlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blf",
  })
  @post("{id}")
  static createBlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
