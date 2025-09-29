import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epcs")
export default class EpcController {
  @operation({
    summary: "Get Epcs",
  })
  @get()
  static getEpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epc",
  })
  @post("{id}")
  static createEpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
