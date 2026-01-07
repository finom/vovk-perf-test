import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyh")
export default class IyhController {
  @operation({
    summary: "Get Iyh",
  })
  @get()
  static getIyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyh",
  })
  @post("{id}")
  static createIyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
