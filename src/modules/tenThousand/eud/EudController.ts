import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euds")
export default class EudController {
  @operation({
    summary: "Get Euds",
  })
  @get()
  static getEuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eud",
  })
  @post("{id}")
  static createEud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
