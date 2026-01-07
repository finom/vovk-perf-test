import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nm")
export default class NmController {
  @operation({
    summary: "Get Nm",
  })
  @get()
  static getNm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nm",
  })
  @post("{id}")
  static createNm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
