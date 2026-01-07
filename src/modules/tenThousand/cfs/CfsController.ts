import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfs")
export default class CfsController {
  @operation({
    summary: "Get Cfs",
  })
  @get()
  static getCfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfs",
  })
  @post("{id}")
  static createCfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
