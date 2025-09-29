import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqcs")
export default class AqcController {
  @operation({
    summary: "Get Aqcs",
  })
  @get()
  static getAqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqc",
  })
  @post("{id}")
  static createAqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
