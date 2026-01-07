import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enh")
export default class EnhController {
  @operation({
    summary: "Get Enh",
  })
  @get()
  static getEnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enh",
  })
  @post("{id}")
  static createEnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
