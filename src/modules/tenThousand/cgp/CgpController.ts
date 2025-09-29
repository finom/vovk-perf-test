import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgps")
export default class CgpController {
  @operation({
    summary: "Get Cgps",
  })
  @get()
  static getCgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgp",
  })
  @post("{id}")
  static createCgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
