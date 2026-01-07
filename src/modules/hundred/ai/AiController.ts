import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ai")
export default class AiController {
  @operation({
    summary: "Get Ai",
  })
  @get()
  static getAi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ai",
  })
  @post("{id}")
  static createAi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
