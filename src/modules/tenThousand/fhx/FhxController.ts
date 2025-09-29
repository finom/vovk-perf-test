import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhxes")
export default class FhxController {
  @operation({
    summary: "Get Fhxes",
  })
  @get()
  static getFhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhx",
  })
  @post("{id}")
  static createFhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
