import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngps")
export default class NgpController {
  @operation({
    summary: "Get Ngps",
  })
  @get()
  static getNgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngp",
  })
  @post("{id}")
  static createNgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
