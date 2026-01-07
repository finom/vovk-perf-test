import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hed")
export default class HedController {
  @operation({
    summary: "Get Hed",
  })
  @get()
  static getHed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hed",
  })
  @post("{id}")
  static createHed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
