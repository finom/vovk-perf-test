import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxa")
export default class BxaController {
  @operation({
    summary: "Get Bxa",
  })
  @get()
  static getBxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxa",
  })
  @post("{id}")
  static createBxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
