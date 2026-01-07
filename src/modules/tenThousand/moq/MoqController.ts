import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moq")
export default class MoqController {
  @operation({
    summary: "Get Moq",
  })
  @get()
  static getMoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moq",
  })
  @post("{id}")
  static createMoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
