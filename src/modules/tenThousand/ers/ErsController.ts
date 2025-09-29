import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ers")
export default class ErsController {
  @operation({
    summary: "Get Ers",
  })
  @get()
  static getErs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ers",
  })
  @post("{id}")
  static createErs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
