import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hat")
export default class HatController {
  @operation({
    summary: "Get Hat",
  })
  @get()
  static getHat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hat",
  })
  @post("{id}")
  static createHat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
