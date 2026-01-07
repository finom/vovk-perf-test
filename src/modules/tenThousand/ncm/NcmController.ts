import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncm")
export default class NcmController {
  @operation({
    summary: "Get Ncm",
  })
  @get()
  static getNcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncm",
  })
  @post("{id}")
  static createNcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
