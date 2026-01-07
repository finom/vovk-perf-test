import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aog")
export default class AogController {
  @operation({
    summary: "Get Aog",
  })
  @get()
  static getAog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aog",
  })
  @post("{id}")
  static createAog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
