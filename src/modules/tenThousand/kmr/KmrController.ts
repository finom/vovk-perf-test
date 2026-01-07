import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmr")
export default class KmrController {
  @operation({
    summary: "Get Kmr",
  })
  @get()
  static getKmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmr",
  })
  @post("{id}")
  static createKmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
