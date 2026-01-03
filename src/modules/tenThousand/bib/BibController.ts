import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bibs")
export default class BibController {
  @operation({
    summary: "Get Bibs",
  })
  @get()
  static getBibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bib",
  })
  @post("{id}")
  static createBib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
