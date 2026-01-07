import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvw")
export default class GvwController {
  @operation({
    summary: "Get Gvw",
  })
  @get()
  static getGvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvw",
  })
  @post("{id}")
  static createGvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
