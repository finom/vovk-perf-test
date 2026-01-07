import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nj")
export default class NjController {
  @operation({
    summary: "Get Nj",
  })
  @get()
  static getNj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nj",
  })
  @post("{id}")
  static createNj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
