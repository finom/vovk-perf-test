import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbg")
export default class HbgController {
  @operation({
    summary: "Get Hbg",
  })
  @get()
  static getHbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbg",
  })
  @post("{id}")
  static createHbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
