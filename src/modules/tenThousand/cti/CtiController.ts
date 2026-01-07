import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cti")
export default class CtiController {
  @operation({
    summary: "Get Cti",
  })
  @get()
  static getCti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cti",
  })
  @post("{id}")
  static createCti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
