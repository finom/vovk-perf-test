import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goo")
export default class GooController {
  @operation({
    summary: "Get Goo",
  })
  @get()
  static getGoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goo",
  })
  @post("{id}")
  static createGoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
