import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avi")
export default class AviController {
  @operation({
    summary: "Get Avi",
  })
  @get()
  static getAvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avi",
  })
  @post("{id}")
  static createAvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
