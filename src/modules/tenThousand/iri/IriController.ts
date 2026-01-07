import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iri")
export default class IriController {
  @operation({
    summary: "Get Iri",
  })
  @get()
  static getIri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iri",
  })
  @post("{id}")
  static createIri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
