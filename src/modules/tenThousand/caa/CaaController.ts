import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caa")
export default class CaaController {
  @operation({
    summary: "Get Caa",
  })
  @get()
  static getCaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caa",
  })
  @post("{id}")
  static createCaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
