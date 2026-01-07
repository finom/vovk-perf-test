import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmv")
export default class NmvController {
  @operation({
    summary: "Get Nmv",
  })
  @get()
  static getNmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmv",
  })
  @post("{id}")
  static createNmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
