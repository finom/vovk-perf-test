import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dti")
export default class DtiController {
  @operation({
    summary: "Get Dti",
  })
  @get()
  static getDti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dti",
  })
  @post("{id}")
  static createDti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
