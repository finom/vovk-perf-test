import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euv")
export default class EuvController {
  @operation({
    summary: "Get Euv",
  })
  @get()
  static getEuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euv",
  })
  @post("{id}")
  static createEuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
