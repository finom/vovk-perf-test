import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcf")
export default class McfController {
  @operation({
    summary: "Get Mcf",
  })
  @get()
  static getMcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcf",
  })
  @post("{id}")
  static createMcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
