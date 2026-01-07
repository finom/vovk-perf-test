import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alv")
export default class AlvController {
  @operation({
    summary: "Get Alv",
  })
  @get()
  static getAlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alv",
  })
  @post("{id}")
  static createAlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
