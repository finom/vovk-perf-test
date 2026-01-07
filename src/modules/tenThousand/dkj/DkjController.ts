import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkj")
export default class DkjController {
  @operation({
    summary: "Get Dkj",
  })
  @get()
  static getDkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkj",
  })
  @post("{id}")
  static createDkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
