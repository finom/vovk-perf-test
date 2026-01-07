import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzj")
export default class HzjController {
  @operation({
    summary: "Get Hzj",
  })
  @get()
  static getHzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzj",
  })
  @post("{id}")
  static createHzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
