import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("labs")
export default class LabController {
  @operation({
    summary: "Get Labs",
  })
  @get()
  static getLabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lab",
  })
  @post("{id}")
  static createLab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
