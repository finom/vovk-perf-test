import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiw")
export default class HiwController {
  @operation({
    summary: "Get Hiw",
  })
  @get()
  static getHiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiw",
  })
  @post("{id}")
  static createHiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
