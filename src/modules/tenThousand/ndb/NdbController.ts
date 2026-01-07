import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndb")
export default class NdbController {
  @operation({
    summary: "Get Ndb",
  })
  @get()
  static getNdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndb",
  })
  @post("{id}")
  static createNdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
