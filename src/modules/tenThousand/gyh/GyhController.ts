import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyh")
export default class GyhController {
  @operation({
    summary: "Get Gyh",
  })
  @get()
  static getGyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyh",
  })
  @post("{id}")
  static createGyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
