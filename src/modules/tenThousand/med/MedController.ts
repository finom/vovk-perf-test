import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meds")
export default class MedController {
  @operation({
    summary: "Get Meds",
  })
  @get()
  static getMeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Med",
  })
  @post("{id}")
  static createMed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
