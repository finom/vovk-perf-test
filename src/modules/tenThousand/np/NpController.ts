import { procedure, prefix, get, post, operation } from "vovk";

@prefix("np")
export default class NpController {
  @operation({
    summary: "Get Np",
  })
  @get()
  static getNp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Np",
  })
  @post("{id}")
  static createNp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
