import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwa")
export default class HwaController {
  @operation({
    summary: "Get Hwa",
  })
  @get()
  static getHwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwa",
  })
  @post("{id}")
  static createHwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
