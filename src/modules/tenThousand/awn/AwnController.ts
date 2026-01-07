import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awn")
export default class AwnController {
  @operation({
    summary: "Get Awn",
  })
  @get()
  static getAwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awn",
  })
  @post("{id}")
  static createAwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
