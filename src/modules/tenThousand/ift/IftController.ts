import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ift")
export default class IftController {
  @operation({
    summary: "Get Ift",
  })
  @get()
  static getIft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ift",
  })
  @post("{id}")
  static createIft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
