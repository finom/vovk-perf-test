import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtfs")
export default class GtfController {
  @operation({
    summary: "Get Gtfs",
  })
  @get()
  static getGtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtf",
  })
  @post("{id}")
  static createGtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
