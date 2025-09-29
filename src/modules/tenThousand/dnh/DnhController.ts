import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnhs")
export default class DnhController {
  @operation({
    summary: "Get Dnhs",
  })
  @get()
  static getDnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnh",
  })
  @post("{id}")
  static createDnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
