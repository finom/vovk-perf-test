import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dca")
export default class DcaController {
  @operation({
    summary: "Get Dca",
  })
  @get()
  static getDca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dca",
  })
  @post("{id}")
  static createDca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
