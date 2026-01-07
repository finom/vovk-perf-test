import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sq")
export default class SqController {
  @operation({
    summary: "Get Sq",
  })
  @get()
  static getSq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sq",
  })
  @post("{id}")
  static createSq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
