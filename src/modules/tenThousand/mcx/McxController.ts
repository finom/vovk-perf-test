import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcx")
export default class McxController {
  @operation({
    summary: "Get Mcx",
  })
  @get()
  static getMcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcx",
  })
  @post("{id}")
  static createMcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
