import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lci")
export default class LciController {
  @operation({
    summary: "Get Lci",
  })
  @get()
  static getLci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lci",
  })
  @post("{id}")
  static createLci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
