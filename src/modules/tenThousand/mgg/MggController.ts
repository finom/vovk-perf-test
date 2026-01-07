import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgg")
export default class MggController {
  @operation({
    summary: "Get Mgg",
  })
  @get()
  static getMgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgg",
  })
  @post("{id}")
  static createMgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
