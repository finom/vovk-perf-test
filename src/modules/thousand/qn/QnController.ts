import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qns")
export default class QnController {
  @operation({
    summary: "Get Qns",
  })
  @get()
  static getQns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qn",
  })
  @post("{id}")
  static createQn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
