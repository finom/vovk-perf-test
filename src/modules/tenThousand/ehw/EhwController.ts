import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehw")
export default class EhwController {
  @operation({
    summary: "Get Ehw",
  })
  @get()
  static getEhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehw",
  })
  @post("{id}")
  static createEhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
