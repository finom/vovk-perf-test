import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tq")
export default class TqController {
  @operation({
    summary: "Get Tq",
  })
  @get()
  static getTq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tq",
  })
  @post("{id}")
  static createTq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
