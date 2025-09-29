import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flps")
export default class FlpController {
  @operation({
    summary: "Get Flps",
  })
  @get()
  static getFlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flp",
  })
  @post("{id}")
  static createFlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
