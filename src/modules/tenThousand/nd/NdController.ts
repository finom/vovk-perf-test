import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nd")
export default class NdController {
  @operation({
    summary: "Get Nd",
  })
  @get()
  static getNd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nd",
  })
  @post("{id}")
  static createNd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
