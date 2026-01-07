import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cii")
export default class CiiController {
  @operation({
    summary: "Get Cii",
  })
  @get()
  static getCii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cii",
  })
  @post("{id}")
  static createCii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
