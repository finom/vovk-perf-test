import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkf")
export default class NkfController {
  @operation({
    summary: "Get Nkf",
  })
  @get()
  static getNkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkf",
  })
  @post("{id}")
  static createNkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
