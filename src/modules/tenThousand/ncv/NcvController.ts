import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncv")
export default class NcvController {
  @operation({
    summary: "Get Ncv",
  })
  @get()
  static getNcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncv",
  })
  @post("{id}")
  static createNcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
