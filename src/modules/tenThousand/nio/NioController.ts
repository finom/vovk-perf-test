import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nio")
export default class NioController {
  @operation({
    summary: "Get Nio",
  })
  @get()
  static getNio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nio",
  })
  @post("{id}")
  static createNio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
