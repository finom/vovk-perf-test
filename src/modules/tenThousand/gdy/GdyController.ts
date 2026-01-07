import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdy")
export default class GdyController {
  @operation({
    summary: "Get Gdy",
  })
  @get()
  static getGdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdy",
  })
  @post("{id}")
  static createGdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
