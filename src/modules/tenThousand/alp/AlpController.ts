import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alp")
export default class AlpController {
  @operation({
    summary: "Get Alp",
  })
  @get()
  static getAlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alp",
  })
  @post("{id}")
  static createAlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
