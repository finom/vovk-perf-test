import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmp")
export default class NmpController {
  @operation({
    summary: "Get Nmp",
  })
  @get()
  static getNmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmp",
  })
  @post("{id}")
  static createNmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
