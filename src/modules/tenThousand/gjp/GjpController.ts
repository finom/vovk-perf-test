import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjps")
export default class GjpController {
  @operation({
    summary: "Get Gjps",
  })
  @get()
  static getGjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjp",
  })
  @post("{id}")
  static createGjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
