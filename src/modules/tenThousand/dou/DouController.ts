import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dou")
export default class DouController {
  @operation({
    summary: "Get Dou",
  })
  @get()
  static getDou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dou",
  })
  @post("{id}")
  static createDou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
