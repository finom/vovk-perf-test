import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igcs")
export default class IgcController {
  @operation({
    summary: "Get Igcs",
  })
  @get()
  static getIgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igc",
  })
  @post("{id}")
  static createIgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
