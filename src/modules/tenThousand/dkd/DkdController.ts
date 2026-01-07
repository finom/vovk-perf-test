import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkd")
export default class DkdController {
  @operation({
    summary: "Get Dkd",
  })
  @get()
  static getDkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkd",
  })
  @post("{id}")
  static createDkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
