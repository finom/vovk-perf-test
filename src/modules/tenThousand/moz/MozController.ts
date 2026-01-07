import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moz")
export default class MozController {
  @operation({
    summary: "Get Moz",
  })
  @get()
  static getMoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moz",
  })
  @post("{id}")
  static createMoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
