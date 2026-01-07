import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aic")
export default class AicController {
  @operation({
    summary: "Get Aic",
  })
  @get()
  static getAic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aic",
  })
  @post("{id}")
  static createAic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
