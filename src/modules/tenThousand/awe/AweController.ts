import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awe")
export default class AweController {
  @operation({
    summary: "Get Awe",
  })
  @get()
  static getAwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awe",
  })
  @post("{id}")
  static createAwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
