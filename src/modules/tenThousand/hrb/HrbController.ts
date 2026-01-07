import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrb")
export default class HrbController {
  @operation({
    summary: "Get Hrb",
  })
  @get()
  static getHrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrb",
  })
  @post("{id}")
  static createHrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
