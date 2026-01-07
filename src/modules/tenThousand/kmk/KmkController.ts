import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmk")
export default class KmkController {
  @operation({
    summary: "Get Kmk",
  })
  @get()
  static getKmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmk",
  })
  @post("{id}")
  static createKmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
