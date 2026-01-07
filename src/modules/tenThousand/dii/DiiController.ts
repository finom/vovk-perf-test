import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dii")
export default class DiiController {
  @operation({
    summary: "Get Dii",
  })
  @get()
  static getDii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dii",
  })
  @post("{id}")
  static createDii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
