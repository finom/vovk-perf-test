import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbk")
export default class HbkController {
  @operation({
    summary: "Get Hbk",
  })
  @get()
  static getHbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbk",
  })
  @post("{id}")
  static createHbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
