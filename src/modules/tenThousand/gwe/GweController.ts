import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwe")
export default class GweController {
  @operation({
    summary: "Get Gwe",
  })
  @get()
  static getGwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwe",
  })
  @post("{id}")
  static createGwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
