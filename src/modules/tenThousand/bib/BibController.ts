import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bib")
export default class BibController {
  @operation({
    summary: "Get Bib",
  })
  @get()
  static getBib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bib",
  })
  @post("{id}")
  static createBib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
