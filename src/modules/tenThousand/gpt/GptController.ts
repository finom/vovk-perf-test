import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpt")
export default class GptController {
  @operation({
    summary: "Get Gpt",
  })
  @get()
  static getGpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpt",
  })
  @post("{id}")
  static createGpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
