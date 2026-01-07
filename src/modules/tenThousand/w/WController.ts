import { procedure, prefix, get, post, operation } from "vovk";

@prefix("w")
export default class WController {
  @operation({
    summary: "Get W",
  })
  @get()
  static getW = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create W",
  })
  @post("{id}")
  static createW = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
