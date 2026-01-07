import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clf")
export default class ClfController {
  @operation({
    summary: "Get Clf",
  })
  @get()
  static getClf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clf",
  })
  @post("{id}")
  static createClf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
