import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcn")
export default class McnController {
  @operation({
    summary: "Get Mcn",
  })
  @get()
  static getMcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcn",
  })
  @post("{id}")
  static createMcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
