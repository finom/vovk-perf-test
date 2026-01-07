import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chl")
export default class ChlController {
  @operation({
    summary: "Get Chl",
  })
  @get()
  static getChl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chl",
  })
  @post("{id}")
  static createChl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
