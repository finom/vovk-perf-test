import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eef")
export default class EefController {
  @operation({
    summary: "Get Eef",
  })
  @get()
  static getEef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eef",
  })
  @post("{id}")
  static createEef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
