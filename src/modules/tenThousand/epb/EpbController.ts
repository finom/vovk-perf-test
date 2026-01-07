import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epb")
export default class EpbController {
  @operation({
    summary: "Get Epb",
  })
  @get()
  static getEpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epb",
  })
  @post("{id}")
  static createEpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
