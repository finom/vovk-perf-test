import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrz")
export default class LrzController {
  @operation({
    summary: "Get Lrz",
  })
  @get()
  static getLrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrz",
  })
  @post("{id}")
  static createLrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
