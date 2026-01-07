import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nci")
export default class NciController {
  @operation({
    summary: "Get Nci",
  })
  @get()
  static getNci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nci",
  })
  @post("{id}")
  static createNci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
