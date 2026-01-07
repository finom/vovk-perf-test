import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsx")
export default class GsxController {
  @operation({
    summary: "Get Gsx",
  })
  @get()
  static getGsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsx",
  })
  @post("{id}")
  static createGsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
