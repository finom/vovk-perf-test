import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiw")
export default class AiwController {
  @operation({
    summary: "Get Aiw",
  })
  @get()
  static getAiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiw",
  })
  @post("{id}")
  static createAiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
