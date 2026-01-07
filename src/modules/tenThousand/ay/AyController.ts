import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ay")
export default class AyController {
  @operation({
    summary: "Get Ay",
  })
  @get()
  static getAy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ay",
  })
  @post("{id}")
  static createAy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
