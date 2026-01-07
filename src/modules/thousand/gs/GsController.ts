import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gs")
export default class GsController {
  @operation({
    summary: "Get Gs",
  })
  @get()
  static getGs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gs",
  })
  @post("{id}")
  static createGs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
