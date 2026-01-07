import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfv")
export default class HfvController {
  @operation({
    summary: "Get Hfv",
  })
  @get()
  static getHfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfv",
  })
  @post("{id}")
  static createHfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
