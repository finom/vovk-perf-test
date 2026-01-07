import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmy")
export default class CmyController {
  @operation({
    summary: "Get Cmy",
  })
  @get()
  static getCmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmy",
  })
  @post("{id}")
  static createCmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
