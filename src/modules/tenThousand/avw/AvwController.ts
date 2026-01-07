import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avw")
export default class AvwController {
  @operation({
    summary: "Get Avw",
  })
  @get()
  static getAvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avw",
  })
  @post("{id}")
  static createAvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
