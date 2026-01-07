import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iou")
export default class IouController {
  @operation({
    summary: "Get Iou",
  })
  @get()
  static getIou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iou",
  })
  @post("{id}")
  static createIou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
