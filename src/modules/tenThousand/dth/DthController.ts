import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dth")
export default class DthController {
  @operation({
    summary: "Get Dth",
  })
  @get()
  static getDth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dth",
  })
  @post("{id}")
  static createDth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
