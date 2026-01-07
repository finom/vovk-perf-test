import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tp")
export default class TpController {
  @operation({
    summary: "Get Tp",
  })
  @get()
  static getTp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tp",
  })
  @post("{id}")
  static createTp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
