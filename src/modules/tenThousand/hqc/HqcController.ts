import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqcs")
export default class HqcController {
  @operation({
    summary: "Get Hqcs",
  })
  @get()
  static getHqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqc",
  })
  @post("{id}")
  static createHqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
