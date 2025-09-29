import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nals")
export default class NalController {
  @operation({
    summary: "Get Nals",
  })
  @get()
  static getNals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nal",
  })
  @post("{id}")
  static createNal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
