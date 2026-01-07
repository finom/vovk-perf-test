import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cm")
export default class CmController {
  @operation({
    summary: "Get Cm",
  })
  @get()
  static getCm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cm",
  })
  @post("{id}")
  static createCm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
