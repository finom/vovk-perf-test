import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inds")
export default class IndController {
  @operation({
    summary: "Get Inds",
  })
  @get()
  static getInds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ind",
  })
  @post("{id}")
  static createInd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
