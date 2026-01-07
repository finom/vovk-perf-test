import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ow")
export default class OwController {
  @operation({
    summary: "Get Ow",
  })
  @get()
  static getOw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ow",
  })
  @post("{id}")
  static createOw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
