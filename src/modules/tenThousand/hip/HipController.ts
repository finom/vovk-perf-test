import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hip")
export default class HipController {
  @operation({
    summary: "Get Hip",
  })
  @get()
  static getHip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hip",
  })
  @post("{id}")
  static createHip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
