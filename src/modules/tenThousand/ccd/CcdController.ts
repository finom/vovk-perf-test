import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccd")
export default class CcdController {
  @operation({
    summary: "Get Ccd",
  })
  @get()
  static getCcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccd",
  })
  @post("{id}")
  static createCcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
