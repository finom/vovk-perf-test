import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbf")
export default class MbfController {
  @operation({
    summary: "Get Mbf",
  })
  @get()
  static getMbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbf",
  })
  @post("{id}")
  static createMbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
