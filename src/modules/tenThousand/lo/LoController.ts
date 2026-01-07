import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lo")
export default class LoController {
  @operation({
    summary: "Get Lo",
  })
  @get()
  static getLo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lo",
  })
  @post("{id}")
  static createLo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
