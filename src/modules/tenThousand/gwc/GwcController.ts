import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwc")
export default class GwcController {
  @operation({
    summary: "Get Gwc",
  })
  @get()
  static getGwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwc",
  })
  @post("{id}")
  static createGwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
