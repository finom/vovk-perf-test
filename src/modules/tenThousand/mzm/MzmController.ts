import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzm")
export default class MzmController {
  @operation({
    summary: "Get Mzm",
  })
  @get()
  static getMzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzm",
  })
  @post("{id}")
  static createMzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
