import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcq")
export default class McqController {
  @operation({
    summary: "Get Mcq",
  })
  @get()
  static getMcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcq",
  })
  @post("{id}")
  static createMcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
