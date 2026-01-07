import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bib")
export default class BibController {
  @operation({
    summary: "Get Bib",
  })
  @get()
  static getBib = procedure({
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
