import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iris")
export default class IriController {
  @operation({
    summary: "Get Iris",
  })
  @get()
  static getIris = procedure({
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
