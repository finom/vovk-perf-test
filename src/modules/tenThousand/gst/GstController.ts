import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsts")
export default class GstController {
  @operation({
    summary: "Get Gsts",
  })
  @get()
  static getGsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gst",
  })
  @post("{id}")
  static createGst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
