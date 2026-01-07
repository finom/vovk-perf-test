import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuh")
export default class CuhController {
  @operation({
    summary: "Get Cuh",
  })
  @get()
  static getCuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuh",
  })
  @post("{id}")
  static createCuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
