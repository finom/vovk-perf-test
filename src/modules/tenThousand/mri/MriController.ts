import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mris")
export default class MriController {
  @operation({
    summary: "Get Mris",
  })
  @get()
  static getMris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mri",
  })
  @post("{id}")
  static createMri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
