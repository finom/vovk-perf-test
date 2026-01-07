import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlh")
export default class HlhController {
  @operation({
    summary: "Get Hlh",
  })
  @get()
  static getHlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlh",
  })
  @post("{id}")
  static createHlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
