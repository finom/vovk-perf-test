import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czj")
export default class CzjController {
  @operation({
    summary: "Get Czj",
  })
  @get()
  static getCzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czj",
  })
  @post("{id}")
  static createCzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
