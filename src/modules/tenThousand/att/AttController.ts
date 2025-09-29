import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atts")
export default class AttController {
  @operation({
    summary: "Get Atts",
  })
  @get()
  static getAtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Att",
  })
  @post("{id}")
  static createAtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
