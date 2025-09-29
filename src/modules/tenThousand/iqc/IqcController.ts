import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqcs")
export default class IqcController {
  @operation({
    summary: "Get Iqcs",
  })
  @get()
  static getIqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqc",
  })
  @post("{id}")
  static createIqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
