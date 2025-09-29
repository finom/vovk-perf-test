import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dobs")
export default class DobController {
  @operation({
    summary: "Get Dobs",
  })
  @get()
  static getDobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dob",
  })
  @post("{id}")
  static createDob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
