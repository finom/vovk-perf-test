import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avj")
export default class AvjController {
  @operation({
    summary: "Get Avj",
  })
  @get()
  static getAvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avj",
  })
  @post("{id}")
  static createAvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
