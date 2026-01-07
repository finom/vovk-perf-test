import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emd")
export default class EmdController {
  @operation({
    summary: "Get Emd",
  })
  @get()
  static getEmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emd",
  })
  @post("{id}")
  static createEmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
