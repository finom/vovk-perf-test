import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aef")
export default class AefController {
  @operation({
    summary: "Get Aef",
  })
  @get()
  static getAef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aef",
  })
  @post("{id}")
  static createAef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
