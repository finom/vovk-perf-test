import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epf")
export default class EpfController {
  @operation({
    summary: "Get Epf",
  })
  @get()
  static getEpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epf",
  })
  @post("{id}")
  static createEpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
