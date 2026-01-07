import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gup")
export default class GupController {
  @operation({
    summary: "Get Gup",
  })
  @get()
  static getGup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gup",
  })
  @post("{id}")
  static createGup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
