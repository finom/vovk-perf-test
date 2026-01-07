import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyj")
export default class EyjController {
  @operation({
    summary: "Get Eyj",
  })
  @get()
  static getEyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyj",
  })
  @post("{id}")
  static createEyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
