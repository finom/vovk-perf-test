import { procedure, prefix, get, post, operation } from "vovk";

@prefix("can")
export default class CanController {
  @operation({
    summary: "Get Can",
  })
  @get()
  static getCan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Can",
  })
  @post("{id}")
  static createCan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
