import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edy")
export default class EdyController {
  @operation({
    summary: "Get Edy",
  })
  @get()
  static getEdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edy",
  })
  @post("{id}")
  static createEdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
