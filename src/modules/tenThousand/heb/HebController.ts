import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heb")
export default class HebController {
  @operation({
    summary: "Get Heb",
  })
  @get()
  static getHeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heb",
  })
  @post("{id}")
  static createHeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
