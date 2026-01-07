import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acw")
export default class AcwController {
  @operation({
    summary: "Get Acw",
  })
  @get()
  static getAcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acw",
  })
  @post("{id}")
  static createAcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
