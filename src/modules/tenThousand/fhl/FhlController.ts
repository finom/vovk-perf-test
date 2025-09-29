import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhls")
export default class FhlController {
  @operation({
    summary: "Get Fhls",
  })
  @get()
  static getFhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhl",
  })
  @post("{id}")
  static createFhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
