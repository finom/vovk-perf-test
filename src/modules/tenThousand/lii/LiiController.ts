import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lii")
export default class LiiController {
  @operation({
    summary: "Get Lii",
  })
  @get()
  static getLii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lii",
  })
  @post("{id}")
  static createLii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
