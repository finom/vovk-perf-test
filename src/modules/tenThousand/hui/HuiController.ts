import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hui")
export default class HuiController {
  @operation({
    summary: "Get Hui",
  })
  @get()
  static getHui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hui",
  })
  @post("{id}")
  static createHui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
