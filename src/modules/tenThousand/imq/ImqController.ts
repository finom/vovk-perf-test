import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imq")
export default class ImqController {
  @operation({
    summary: "Get Imq",
  })
  @get()
  static getImq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imq",
  })
  @post("{id}")
  static createImq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
