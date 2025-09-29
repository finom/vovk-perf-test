import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iris")
export default class IriController {
  @operation({
    summary: "Get Iris",
  })
  @get()
  static getIris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iri",
  })
  @post("{id}")
  static createIri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
