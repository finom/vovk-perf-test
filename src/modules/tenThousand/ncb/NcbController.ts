import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncb")
export default class NcbController {
  @operation({
    summary: "Get Ncb",
  })
  @get()
  static getNcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncb",
  })
  @post("{id}")
  static createNcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
