import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuv")
export default class IuvController {
  @operation({
    summary: "Get Iuv",
  })
  @get()
  static getIuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuv",
  })
  @post("{id}")
  static createIuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
