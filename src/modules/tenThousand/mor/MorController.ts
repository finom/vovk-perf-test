import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mor")
export default class MorController {
  @operation({
    summary: "Get Mor",
  })
  @get()
  static getMor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mor",
  })
  @post("{id}")
  static createMor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
