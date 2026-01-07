import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mar")
export default class MarController {
  @operation({
    summary: "Get Mar",
  })
  @get()
  static getMar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mar",
  })
  @post("{id}")
  static createMar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
