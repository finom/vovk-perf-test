import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsy")
export default class NsyController {
  @operation({
    summary: "Get Nsy",
  })
  @get()
  static getNsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsy",
  })
  @post("{id}")
  static createNsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
