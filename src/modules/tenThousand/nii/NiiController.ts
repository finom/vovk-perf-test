import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("niis")
export default class NiiController {
  @operation({
    summary: "Get Niis",
  })
  @get()
  static getNiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nii",
  })
  @post("{id}")
  static createNii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
