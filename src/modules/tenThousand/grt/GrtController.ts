import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grt")
export default class GrtController {
  @operation({
    summary: "Get Grt",
  })
  @get()
  static getGrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grt",
  })
  @post("{id}")
  static createGrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
