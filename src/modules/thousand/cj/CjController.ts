import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cj")
export default class CjController {
  @operation({
    summary: "Get Cj",
  })
  @get()
  static getCj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cj",
  })
  @post("{id}")
  static createCj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
