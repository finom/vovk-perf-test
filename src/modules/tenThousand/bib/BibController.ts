import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bibs")
export default class BibController {
  @operation({
    summary: "Get Bibs",
  })
  @get()
  static getBibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bib",
  })
  @post("{id}")
  static createBib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
