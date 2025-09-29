import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzts")
export default class BztController {
  @operation({
    summary: "Get Bzts",
  })
  @get()
  static getBzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzt",
  })
  @post("{id}")
  static createBzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
