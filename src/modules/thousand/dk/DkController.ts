import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dk")
export default class DkController {
  @operation({
    summary: "Get Dk",
  })
  @get()
  static getDk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dk",
  })
  @post("{id}")
  static createDk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
