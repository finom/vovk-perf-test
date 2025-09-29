import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dngs")
export default class DngController {
  @operation({
    summary: "Get Dngs",
  })
  @get()
  static getDngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dng",
  })
  @post("{id}")
  static createDng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
