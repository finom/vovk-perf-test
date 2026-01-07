import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ges")
export default class GesController {
  @operation({
    summary: "Get Ges",
  })
  @get()
  static getGes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ges",
  })
  @post("{id}")
  static createGes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
