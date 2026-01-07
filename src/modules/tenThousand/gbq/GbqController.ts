import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbq")
export default class GbqController {
  @operation({
    summary: "Get Gbq",
  })
  @get()
  static getGbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbq",
  })
  @post("{id}")
  static createGbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
