import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mry")
export default class MryController {
  @operation({
    summary: "Get Mry",
  })
  @get()
  static getMry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mry",
  })
  @post("{id}")
  static createMry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
