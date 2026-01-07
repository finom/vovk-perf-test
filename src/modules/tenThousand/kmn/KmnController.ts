import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmn")
export default class KmnController {
  @operation({
    summary: "Get Kmn",
  })
  @get()
  static getKmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmn",
  })
  @post("{id}")
  static createKmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
