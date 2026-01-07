import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlc")
export default class MlcController {
  @operation({
    summary: "Get Mlc",
  })
  @get()
  static getMlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlc",
  })
  @post("{id}")
  static createMlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
