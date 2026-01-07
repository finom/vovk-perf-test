import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebq")
export default class EbqController {
  @operation({
    summary: "Get Ebq",
  })
  @get()
  static getEbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebq",
  })
  @post("{id}")
  static createEbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
