import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gef")
export default class GefController {
  @operation({
    summary: "Get Gef",
  })
  @get()
  static getGef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gef",
  })
  @post("{id}")
  static createGef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
