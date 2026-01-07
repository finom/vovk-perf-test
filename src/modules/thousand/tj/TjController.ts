import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tj")
export default class TjController {
  @operation({
    summary: "Get Tj",
  })
  @get()
  static getTj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tj",
  })
  @post("{id}")
  static createTj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
