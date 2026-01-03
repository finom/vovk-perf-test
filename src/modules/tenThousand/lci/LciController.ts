import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcis")
export default class LciController {
  @operation({
    summary: "Get Lcis",
  })
  @get()
  static getLcis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lci",
  })
  @post("{id}")
  static createLci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
