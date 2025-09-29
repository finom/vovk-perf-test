import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eugs")
export default class EugController {
  @operation({
    summary: "Get Eugs",
  })
  @get()
  static getEugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eug",
  })
  @post("{id}")
  static createEug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
