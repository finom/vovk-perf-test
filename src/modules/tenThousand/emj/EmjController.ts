import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emj")
export default class EmjController {
  @operation({
    summary: "Get Emj",
  })
  @get()
  static getEmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emj",
  })
  @post("{id}")
  static createEmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
