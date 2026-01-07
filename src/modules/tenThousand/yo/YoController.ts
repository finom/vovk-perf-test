import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yo")
export default class YoController {
  @operation({
    summary: "Get Yo",
  })
  @get()
  static getYo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yo",
  })
  @post("{id}")
  static createYo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
