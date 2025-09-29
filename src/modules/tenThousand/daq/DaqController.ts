import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daqs")
export default class DaqController {
  @operation({
    summary: "Get Daqs",
  })
  @get()
  static getDaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Daq",
  })
  @post("{id}")
  static createDaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
