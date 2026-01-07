import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzn")
export default class HznController {
  @operation({
    summary: "Get Hzn",
  })
  @get()
  static getHzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzn",
  })
  @post("{id}")
  static createHzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
