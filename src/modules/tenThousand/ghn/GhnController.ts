import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghn")
export default class GhnController {
  @operation({
    summary: "Get Ghn",
  })
  @get()
  static getGhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghn",
  })
  @post("{id}")
  static createGhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
