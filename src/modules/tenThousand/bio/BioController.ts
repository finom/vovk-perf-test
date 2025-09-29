import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bios")
export default class BioController {
  @operation({
    summary: "Get Bios",
  })
  @get()
  static getBios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bio",
  })
  @post("{id}")
  static createBio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
