import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkw")
export default class DkwController {
  @operation({
    summary: "Get Dkw",
  })
  @get()
  static getDkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkw",
  })
  @post("{id}")
  static createDkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
