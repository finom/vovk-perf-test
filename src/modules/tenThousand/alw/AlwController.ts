import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alw")
export default class AlwController {
  @operation({
    summary: "Get Alw",
  })
  @get()
  static getAlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alw",
  })
  @post("{id}")
  static createAlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
