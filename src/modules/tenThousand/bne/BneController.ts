import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnes")
export default class BneController {
  @operation({
    summary: "Get Bnes",
  })
  @get()
  static getBnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bne",
  })
  @post("{id}")
  static createBne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
