import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcus")
export default class HcuController {
  @operation({
    summary: "Get Hcus",
  })
  @get()
  static getHcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcu",
  })
  @post("{id}")
  static createHcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
