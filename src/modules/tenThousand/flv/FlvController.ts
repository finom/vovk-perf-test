import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flv")
export default class FlvController {
  @operation({
    summary: "Get Flv",
  })
  @get()
  static getFlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flv",
  })
  @post("{id}")
  static createFlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
