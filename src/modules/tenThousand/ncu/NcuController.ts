import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncu")
export default class NcuController {
  @operation({
    summary: "Get Ncu",
  })
  @get()
  static getNcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncu",
  })
  @post("{id}")
  static createNcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
