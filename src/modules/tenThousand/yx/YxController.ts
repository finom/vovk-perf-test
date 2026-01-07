import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yx")
export default class YxController {
  @operation({
    summary: "Get Yx",
  })
  @get()
  static getYx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yx",
  })
  @post("{id}")
  static createYx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
