import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbw")
export default class GbwController {
  @operation({
    summary: "Get Gbw",
  })
  @get()
  static getGbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbw",
  })
  @post("{id}")
  static createGbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
