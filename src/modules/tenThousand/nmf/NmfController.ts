import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmf")
export default class NmfController {
  @operation({
    summary: "Get Nmf",
  })
  @get()
  static getNmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmf",
  })
  @post("{id}")
  static createNmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
