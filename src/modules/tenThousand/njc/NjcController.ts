import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njc")
export default class NjcController {
  @operation({
    summary: "Get Njc",
  })
  @get()
  static getNjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njc",
  })
  @post("{id}")
  static createNjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
