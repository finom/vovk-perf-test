import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glu")
export default class GluController {
  @operation({
    summary: "Get Glu",
  })
  @get()
  static getGlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glu",
  })
  @post("{id}")
  static createGlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
