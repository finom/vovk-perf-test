import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzc")
export default class HzcController {
  @operation({
    summary: "Get Hzc",
  })
  @get()
  static getHzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzc",
  })
  @post("{id}")
  static createHzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
