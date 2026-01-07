import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mee")
export default class MeeController {
  @operation({
    summary: "Get Mee",
  })
  @get()
  static getMee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mee",
  })
  @post("{id}")
  static createMee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
