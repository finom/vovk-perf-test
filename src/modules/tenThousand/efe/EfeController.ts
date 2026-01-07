import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efe")
export default class EfeController {
  @operation({
    summary: "Get Efe",
  })
  @get()
  static getEfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efe",
  })
  @post("{id}")
  static createEfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
