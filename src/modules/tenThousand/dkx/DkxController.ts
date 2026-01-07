import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkx")
export default class DkxController {
  @operation({
    summary: "Get Dkx",
  })
  @get()
  static getDkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkx",
  })
  @post("{id}")
  static createDkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
