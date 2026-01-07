import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gle")
export default class GleController {
  @operation({
    summary: "Get Gle",
  })
  @get()
  static getGle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gle",
  })
  @post("{id}")
  static createGle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
