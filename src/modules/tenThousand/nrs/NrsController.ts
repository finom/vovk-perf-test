import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrs")
export default class NrsController {
  @operation({
    summary: "Get Nrs",
  })
  @get()
  static getNrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrs",
  })
  @post("{id}")
  static createNrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
