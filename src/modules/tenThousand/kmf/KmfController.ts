import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmf")
export default class KmfController {
  @operation({
    summary: "Get Kmf",
  })
  @get()
  static getKmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmf",
  })
  @post("{id}")
  static createKmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
