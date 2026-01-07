import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hef")
export default class HefController {
  @operation({
    summary: "Get Hef",
  })
  @get()
  static getHef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hef",
  })
  @post("{id}")
  static createHef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
