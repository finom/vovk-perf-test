import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isx")
export default class IsxController {
  @operation({
    summary: "Get Isx",
  })
  @get()
  static getIsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isx",
  })
  @post("{id}")
  static createIsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
