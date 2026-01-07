import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbv")
export default class HbvController {
  @operation({
    summary: "Get Hbv",
  })
  @get()
  static getHbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbv",
  })
  @post("{id}")
  static createHbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
