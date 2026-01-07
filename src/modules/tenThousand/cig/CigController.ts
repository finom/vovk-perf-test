import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cig")
export default class CigController {
  @operation({
    summary: "Get Cig",
  })
  @get()
  static getCig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cig",
  })
  @post("{id}")
  static createCig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
