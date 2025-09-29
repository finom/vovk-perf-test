import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifps")
export default class IfpController {
  @operation({
    summary: "Get Ifps",
  })
  @get()
  static getIfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifp",
  })
  @post("{id}")
  static createIfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
