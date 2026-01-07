import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iri")
export default class IriController {
  @operation({
    summary: "Get Iri",
  })
  @get()
  static getIri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iri",
  })
  @post("{id}")
  static createIri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
