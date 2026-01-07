import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzg")
export default class HzgController {
  @operation({
    summary: "Get Hzg",
  })
  @get()
  static getHzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzg",
  })
  @post("{id}")
  static createHzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
