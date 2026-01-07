import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcj")
export default class McjController {
  @operation({
    summary: "Get Mcj",
  })
  @get()
  static getMcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcj",
  })
  @post("{id}")
  static createMcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
